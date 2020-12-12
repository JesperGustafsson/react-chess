import React from 'react';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

  renderSquare(row, col, squareShade) {

    const pos = [row, col];
    return <Square 
    //piece = {this.props.squares[i]} 
    image = {this.props.squares[row][col]? this.props.squares[row][col].image : null}
    shade = {squareShade}
    hp = {this.props.squares[row][col] ? this.props.squares[row][col].hp : null}
    atk = {this.props.squares[row][col] ? this.props.squares[row][col].atk : null}

    onClick={() => this.props.onClick(pos)}
    />
  }

   render() {
    console.log("BOARD UPDATE")
    const html_board = [];
    for(let row = 0; row < this.props.squares.length; row++){
      const html_row = [];
      for(let col = 0; col < this.props.squares[row].length; col++){
        const squareShade = (isEven(row) === isEven(col)) ? "light-square" : "dark-square";
        html_row.push(this.renderSquare(row, col, squareShade));
      }
      html_board.push(<div className="board-row">{html_row}</div>);
    }

    return (
      <div>
        {html_board}
      </div>
    );
  }

}

function isEven(num){
  return num % 2 === 0
}