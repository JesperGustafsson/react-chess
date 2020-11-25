import Bishop from '../pieces/bishop.js';
import King from '../pieces/king.js';
import Knight from '../pieces/knight.js';
import Pawn from '../pieces/pawn.js';
import Queen from '../pieces/queen.js';
import Rook from '../pieces/rook.js';
import Rock from '../pieces/rock.js';

const A = 0;
const B = 1;
const C = 2;
/*
export default function initialiseChessBoard() {
  const squares = Array(72).fill(null);

  for (let i = 8; i < 16; i++) {
    squares[i] = new Pawn(2);
    squares[i + 40] = new Pawn(1);
  }
  squares[0] = new Rook(2);
  squares[7] = new Rook(2);
  squares[56] = new Rook(1);
  squares[63] = new Rook(1);

  squares[1] = new Knight(2);
  squares[6] = new Knight(2);
  squares[57] = new Knight(1);
  squares[62] = new Knight(1);

  squares[2] = new Bishop(2);
  squares[5] = new Bishop(2);
  squares[58] = new Bishop(1);
  squares[61] = new Bishop(1);

  squares[3] = new Queen(2);
  squares[4] = new King(2);

  squares[59] = new Queen(1);
  squares[60] = new King(1);

  return squares;

}
*/
/*
export default function initialiseChessBoard() {
  const squares = Array(8).fill(0).map(row => new Array(9).fill(null));
  console.log(squares);

  //ROOKS
  squares[0][0] = new Rook(2);
  squares[0][8] = new Rook(2);
  squares[7][0] = new Rook(1);
  squares[7][8] = new Rook(1);
  
  //KNIGHT
  squares[0][1] = new Knight(2);
  squares[0][7] = new Knight(2);
  squares[7][1] = new Knight(1);
  squares[7][7] = new Knight(1);
  
  //BISHOP
  squares[0][2] = new Bishop(2);
  squares[0][6] = new Bishop(2);
  squares[7][2] = new Bishop(1);
  squares[7][6] = new Bishop(1);

  //QUEEN&KING
  squares[0][3] = new Queen(2);
  squares[0][5] = new King(2);
  squares[7][3] = new Queen(1);
  squares[7][5] = new King(1);

  //PAWNS
  for (let i = 0; i < squares[0].length; i++) {
    if (i !== 4) {
      squares[1][i] = new Pawn(2);
      squares[6][i] = new Pawn(1);
    }
  }

  return squares;

}
*/
/*
export default function initialiseChessBoard() {

  const squares = [
    [new Rook(2), new Knight(2), new Bishop(2), new Queen(2), new King(2), new Bishop(2), new Knight(2), new Rook(2)],
    [new Pawn(2), new Pawn(2),   new Pawn(2),   new Pawn(2),  new Pawn(2), new Pawn(2),   new Pawn(2),   new Pawn(2)],
    [null,        null,          null,          null,         null,        null,          null,          null],
    [null,        null,          null,          null,         null,        null,          null,          null],
    [null,        null,          null,          null,         null,        null,          null,          null],
    [null,        null,          null,          null,         null,        null,          null,          null],
    [new Rook(1), new Knight(1), new Bishop(1), new Queen(1), new King(1), new Bishop(1), new Knight(1), new Rook(1)],
    [new Pawn(1), new Pawn(1),   new Pawn(1),   new Pawn(1),  new Pawn(1), new Pawn(1),   new Pawn(1),   new Pawn(1)]
  ];

  return squares;

}
*/
export default function initialiseChessBoard() {

  /* higher-case: WHITE, lower-case: BLACK
  
    - = Empty
    P = Pawn
    R = Rook
    K = Knight
    B = Bishop
    Q = Queen
    X = King
        



  */

  const positions ="----------- "
                  +"-RKBQ-XBKR- "
                  +"-PPPP-PPPP- "
                  +"--##------- "
                  +"--#----#--- "
                  +"----------- "
                  +"-#---##---# "
                  +"-pppp-pppp- "
                  +"-rkbq-xbkr- "
                  +"-----------"
  //Splits into an array with each row
  const rows = positions.split(" ");
  
  //Makes an array SQUARES with length of ROWS
  const squares = new Array(rows.length);
  
  //For each row
  for (let row = 0; row < squares.length; row++) {

    //Puts an array rowARRAY(cols) into each element of SQUARES(rows)
    const rowArray = new Array(rows[row]).fill(null);
    squares[row] = rowArray;
    
    //Splits the row-string into an array, each element being a square
    const squareArray = rows[row].split("");

    for (let col = 0; col < squareArray.length; col++) {
      
      const square = squareArray[col];
      switch(square) {

        case '#':
          squares[row][col] = new Rock(2);
          break;

        case 'r':
          squares[row][col] = new Rook(-1);
          break;      
        case 'R':
          squares[row][col] = new Rook(1);
          break;
        
        case 'b': 
          squares[row][col] = new Bishop(-1);
          break;
        case 'B': 
          squares[row][col] = new Bishop(1);
          break;

        case 'k':
          squares[row][col] = new Knight(-1);
          break;
        case 'K':
          squares[row][col] = new Knight(1);
          break;

        case 'q': 
          squares[row][col] = new Queen(-1);
          break;
        case 'Q': 
          squares[row][col] = new Queen(1);
          break;

        case 'x': 
          squares[row][col] = new King(-1);
          break;
        case 'X': 
          squares[row][col] = new King(1);
          break;
          
        case 'p': 
          squares[row][col] = new Pawn(-1);
          break;
        case 'P': 
          squares[row][col] = new Pawn(1);
          break;

        default: 
          squares[row][col] = null;
          break;

            
      }


      
    }
  }

  console.log(squares);
  
  return squares;

}