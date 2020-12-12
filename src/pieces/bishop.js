import Piece from './piece.js';

export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
  }
  
  isMoveLegal(src, dest, squares) {

    const srcY = src[0];
    const srcX = src[1];
    const destY = dest[0];
    const destX = dest[1];

    let dirX = destX > srcX ? 1 : destX < srcX ? -1 : 0;  //X-axis direction
    let dirY = destY > srcY ? 1 : destY < srcY ? -1 : 0;  //Y-axis direction
    let nextX = srcX;
    let nextY = srcY;

    let nextStep = this.step(dirX, dirY, nextX, nextY, 1);
    nextX = nextStep[0];
    nextY = nextStep[1];

    console.log(`srcX: ${srcX}, srcY: ${srcY}, destX: ${destX}, destY: ${destY}`)


    if (Math.abs(destX - srcX) === (Math.abs(destY - srcY))) {

      while (nextX !== destX || nextY !== destY){
        console.log(`nextX: ${nextX}, nextY: ${nextY}`)

        if (!(squares[nextY][nextX] == null)) {
          console.log("STEP FAIL");
          return false;
        }
        console.log("STEP OK");
        
        let nextStep = this.step(dirX, dirY, nextX, nextY, 1);
        nextX = nextStep[0];
        nextY = nextStep[1];

      }
      return true;
    }


    return false;
  }
}