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

    const row = pos[0];
    const col = pos[1];
    console.log(`CLICK... PHASE: ${this.state.PHASE}`);
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

    /*

      DESTINATION CLICK START
      IF ALLY: FAIL (YOU CANNOT MOVE TO YOUR OWN PIECE) -> PHASE: PICKING
      IF OBST: FAIL (YOU CANNOT MOVE TO OBSTACLE) -> PHASE: PICKING
      ELSE CHECKLEGAL
        IF LEGAL
          MOVE / COMBAT 
            IF KING ALIVE -> PHASE: PICKING
            ELSE -> PHASE: GAMEOVER
        ELSE 
          FAIL (PIECE CANNOT MOVE THERE) -> PHASE: PICKING




    */


    
    //Destination Click
    else if (this.state.PHASE === "ATTACKING") {
     
      const isMoveLegal = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]].isMoveLegal(this.state.attackingPiece, pos, squares);
      

      //Invalid click (Self)
      if (squares[row][col] && squares[row][col].player && squares[row][col].player == this.state.player) {
        console.log("Invalid click: Self");
        this.setState(
          { status: `You cannot move to your own piece, choose another piece`,
          PHASE: "PICKING" },
          function () {
            console.log(this.state.PHASE);  
          }
        );
      }

      //Invalid click (Obstacle)
      else if (squares[row][col] && squares[row][col].player && squares[row][col].player == 2) {
        console.log("Invalid click: Obstacle");
        this.setState(
          { status: `Your ${this.state.attackingPiece.constructor.name} cannot move there, choose another piece`,
          PHASE: "PICKING" },
          function () {
            console.log(this.state.PHASE);  
          }
        );
      }

      //Invalid click (Move not legal)
      else if (!isMoveLegal) {
        console.log(`Your ${this.state.attackingPiece.constructor.name} cannot move there, choose another piece`);
        this.setState(
          { status: `Your ${this.state.attackingPiece.constructor.name} cannot move there, choose another piece`,
          PHASE: "PICKING" },
          function () {
            console.log(this.state.PHASE);  
          }
        );
      }

      //Valid click (Empty)
      else if (squares[row][col] == null) {

        squares[row][col] = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]]
        squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]] = null;
       
        this.setState({
          status: `${this.state.turn === "white" ? "Black's" : "White's"} turn to move`,
          PHASE: "PICKING",
          player: this.state.player*-1,
          turn: this.state.turn === "white" ? "black": "white"
        }, function () {
          console.log(this.state.PHASE);  
        });    
      }

      //Valid click (Enemy)
      else if (squares[row][col].player && squares[row][col].player == this.state.player*-1) { 

        let defendingPiece = squares[row][col];
        console.log(`ATTACKED OBJECT: ${defendingPiece.constructor}`);
        console.log(`isKing?: ${defendingPiece.isKing}`);
        let attackingPiece = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]]

        //COMBAT
        defendingPiece.hp -= attackingPiece.atk;
        this.setState({
          status: `${this.state.turn === "white" ? "Black's" : "White's"} turn to move`,
          PHASE: "PICKING",
          player: this.state.player*-1,
          turn: this.state.turn === "white" ? "black": "white"
        }, function () {
          console.log(this.state.PHASE);  
        });   

        if (!defendingPiece.hp || defendingPiece.hp < 0) {
          if (defendingPiece.isKing) {
            console.log(`It's Game Over, bitch.1`);
            this.setState({
              status: `Game over. ${this.state.turn === "white" ? "Black" : "White"} has won the game.`,
              PHASE: "GAMEOVER",
            }, function () {
              console.log(`It's Game Over, bitch.2`);
              console.log(`It's Game Over, bitch.3 ${this.state.PHASE}`);  
            });   
          }
          squares[row][col] = squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]];
          squares[this.state.attackingPiece[0]][this.state.attackingPiece[1]] = null;
        }
      }

      else {
        console.log("Unknown Click")
      }
    }

    else {
      console.log(`GAME OVER!!!++ ${this.state.PHASE}`)
      this.setState({
        status: `Player ${this.state.turn} wins`,
      })
    }

    console.log(`END OF PHASE : ${this.state.PHASE}`)

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