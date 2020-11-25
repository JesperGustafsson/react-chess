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
      sourceSelection: -1,
      status: '',
      turn: 'white'
    }
  }
 
  handleClick(pos){
    const row = pos[0];
    const col = pos[1];
    console.log("Click");
    //Clicks on board
    const squares = this.state.squares;
    
    //Selection click
    if(this.state.sourceSelection === -1){
      console.log("Click: Selection")
      //Picks own piece
      console.log(row + "," + col);
      console.log(squares[row][col]);
      if(squares[row][col]) {console.log(squares[row][col].player);}
      
      if(squares[row][col] && (squares[row][col].player === this.state.player)) {
        this.setState({
          status: "Select Destination",
          sourceSelection: pos
        });
      }

      //Picks not own piece
      else {
        this.setState({
          status: "Wrong Selection",    
        });
      }
    }
      
    //Destination Click
    else {
      console.log("Destination Click");

      const isMoveLegal = squares[this.state.sourceSelection[0]][this.state.sourceSelection[1]].isMoveLegal(this.state.sourceSelection, pos);
      
      if (!isMoveLegal) {
        console.log("Your pawn cannot move there, choose another piece");
        this.setState({
          status: "Your pawn cannot move there, choose another piece",
          sourceSelection: -1
        });
      }


      //Valid click (Empty)
      else if (squares[row][col] == null) {
        console.log("Empty click")

        squares[row][col] = squares[this.state.sourceSelection[0]][this.state.sourceSelection[1]]
        squares[this.state.sourceSelection[0]][this.state.sourceSelection[1]] = null;
       
        this.setState({
          status: "Empty click",
          sourceSelection: -1
        });
      }

      //Valid click (Enemy)
      else if (squares[row][col].player && squares[row][col].player == this.state.player*-1) { 
        console.log("Enemy click")
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




/*
    else if(this.state.sourceSelection > -1){
      squares[this.state.sourceSelection].image = {...squares[this.state.sourceSelection].image, backgroundColor: null}
    // Moves to own pieces
      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1,
        })
        
      }

      // Moves to empty/opponent
      else{
        
        const squares = this.state.squares.slice();
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
        const isDestEnemyOccupied = squares[i]? true : false; 
        const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);


          //Legal move
        if(isMovePossible && isMoveLegal){

          //Attack
          if(squares[i] !== null){
            if(squares[i].player === 1){
              whiteFallenSoldiers.push(squares[i]);
            }
            else{
              blackFallenSoldiers.push(squares[i]);
            }
          }

          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          let player = this.state.player === 1? 2: 1;
          let turn = this.state.turn === 'white'? 'black' : 'white';
          this.setState({
            sourceSelection: -1,
            squares: squares,
            whiteFallenSoldiers: whiteFallenSoldiers,
            blackFallenSoldiers: blackFallenSoldiers,
            player: player,
            status: '',
            turn: turn
          });
        }

        //Illegal move
        else{
          this.setState({
            status: "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1,
          });
        }
      }
    }
    */

  }

  /**
   * Check all path indices are null. For one steps move of pawn/others or jumping moves of knight array is empty, so  move is legal.
   * @param  {[type]}  srcToDestPath [array of board indices comprising path between src and dest ]
   * @return {Boolean}               
   */
  isMoveLegal(srcToDestPath){
    let isLegal = true;
    for(let i = 0; i < srcToDestPath.length; i++){
      if(this.state.squares[srcToDestPath[i]] !== null){
        isLegal = false;
      }
    }
    return isLegal;
  }

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