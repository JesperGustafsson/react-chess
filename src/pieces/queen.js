import Piece from './piece.js';

export default class Queen extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    this.atk = 5;
    this.hp = 10;
  }

  isMoveLegal(src, dest, squares) {
    // Possible movement: straight(max), diagonal(max)
    
    let destX = dest[0];
    let destY = dest[1];
    let srcX = src[0];
    let srcY = src[1];

    console.log(`srcX: ${srcX}, srcY: ${srcY}, destX: ${destX}, destY: ${destY}`)


    // Move  (Horizontal || Vertical) || Diagonal 
    if (!((srcX === destX || srcY === destY) || (Math.abs(destX - srcX)) === (Math.abs(destY - srcY)))) {
      return false;
    } else {
      let dirX = destX > srcX ? 1 : destX < srcX ? -1 : 0;  //X-axis direction
      let dirY = destY > srcY ? 1 : destY < srcY ? -1 : 0;  //Y-axis direction
      let nextX = srcX;
      let nextY = srcY;
  
      let nextStep = this.step(dirX, dirY, nextX, nextY, 1);
      nextX = nextStep[0];
      nextY = nextStep[1];

      while (nextX !== destX || nextY !== destY){

          if (!(squares[nextX][nextY] == null)) return false;
          
          let nextStep = this.step(dirX, dirY, nextX, nextY, 1);
          nextX = nextStep[0];
          nextY = nextStep[1];
      }
      
      return true;      

    }
  }
}