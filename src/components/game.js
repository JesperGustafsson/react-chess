import React from 'react';
import '../index.css';
import Board from './board.js';
import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from '../helpers/board-initialiser.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      attackingPiece: -1,
      defendingPiece: -1,
      PHASE: "PICKING",
      status: '',
      turn: 'white',
      gameOver: false
    }
  }
 
  handleClick(pos){
    let gameOver = false;
    const row = pos[0];
    const col = pos[1];
    console.log("Click");
    //Clicks on board
    const squares = this.state.squares;
    
    //Selection click
    if(this.state.PHASE === "PICKING"){

      //Picks own piece
      if(squares[row][col] && (squares[row][col].player === this.state.player)) {
        this.setState({
          status: "Select Destination",
          attackingPiece: pos,
          PHASE: "ATTACKING"
        });
      }

      //Picks not own piece
      else {
        this.setState({
          status: "Wrong Selection, pick your own piece",    
        });
      }
    }
      
    //Destination Click
    else {
      const isMoveLegal = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]].isMoveLegal(this.state.attackingPiece, pos, squares);
      
      if (!isMoveLegal) {
        console.log("Your pawn cannot move there, choose another piece");
        this.setState({
          status: "Your pawn cannot move there, choose another piece",
          PHASE: "PICKING"
        });
      }


      //Valid click (Empty)
      else if (squares[row][col] == null) {
        console.log("Empty click")

        squares[row][col] = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]]
        squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]] = null;
       
        this.setState({
          status: "Empty click",
          PHASE: "PICKING",
          player: this.state.player*-1,
          turn: this.state.turn === "white" ? "black": "white"
        });
      }

      //Valid click (Enemy)
      else if (squares[row][col].player && squares[row][col].player == this.state.player*-1) { 
        console.log("Enemy click")

        let defendingPiece = squares[row][col];
        console.log(defendingPiece.constructor.name);

        let attackingPiece = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]]
        console.log(`player:${this.state.player}, hp: ${defendingPiece.hp}, atk: ${attackingPiece.atk}`)
        //COMBAT
        defendingPiece.hp -= attackingPiece.atk;
        if (!defendingPiece.hp || defendingPiece.hp < 0) {
          console.log("AYYY PIECE FUCKIGN DFEAD YO ");
          if (defendingPiece.constructor.name === "King") {
            console.log("GAME OVER MAN GAME OVER");
            gameOver = true;
          }
          squares[row][col] = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]];
          squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]] = null;
        }
        
        console.log(gameOver);
        if (!gameOver) {
          console.log("NOT GAME OVER!!!")

          this.setState({
            status: "Enemy attacked",
            PHASE: "PICKING",
            player: this.state.player*-1,
            turn: this.state.turn === "white" ? "black": "white"
          });
        } else {
          console.log("GAME OVER!!!")
          this.setState({
            status: `Player ${this.state.turn} wins`,
          });
        }
        
      }
      //Invalid click (Self)
      else if (squares[row][col].player && squares[row][col].player == this.state.player) {
        console.log("Invalid click: Self");
      }

      //Invalid click (Obstacle)
      else if (squares[row][col].player && squares[row][col].player == 2) {
        console.log("Invalid click: Obstacle");
      }

      else {
        console.log("Unknown Click")
      }
    }
  }

  /**
   * Check all path indices are null. For one steps move of pawn/others or jumping moves of knight array is empty, so  move is legal.
   * @param  {[type]}  srcToDestPath [array of board in dices comprising path between src and dest ]
   * @return {Boolean}               
   */

  render() {
    console.log("GAME UPDATE")
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div id="player-turn-box" style={{backgroundColor: this.state.turn}}>
  
            </div>
            <div className="game-status">{this.state.status}</div>

            <div className="fallen-soldier-block">
              
              {<FallenSoldierBlock
              whiteFallenSoldiers = {this.state.whiteFallenSoldiers}
              blackFallenSoldiers = {this.state.blackFallenSoldiers}
              />
            }
            </div>
            
          </div>
        </div>

        <div className="icons-attribution">
          <div> <small> Chess Icons And Favicon (extracted) By en:User:Cburnett [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>, <a href="http://opensource.org/licenses/bsd-license.php">BSD</a> or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>], <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">via Wikimedia Commons</a> </small></div>
        </div>
      </div>

     
      );
  }
}