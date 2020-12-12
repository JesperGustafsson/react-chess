import Piece from './piece.js';

export default class King extends Piece {

    constructor(player){
      super(
        player, 
        (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")
        );
        this.hp = 12;
    }
    
    isMoveLegal(src, dest) {
    /*  MOVE PATTERN
           OOO
           OPO
           OOO
    */
    const srcY = src[0];
    const srcX = src[1];
    const destY = dest[0];
    const destX = dest[1];

    console.log(`srcX: ${srcX}, srcY: ${srcY}, destX: ${destX}, destY: ${destY}`)

    if (Math.abs(destY - srcY) <= 1 && Math.abs(destX - srcX) <= 1) {
      return true;
    }
    return false;
      }
}