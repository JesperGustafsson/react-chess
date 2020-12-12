import Piece from './piece.js';

export default class Knight extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
  }

  isMoveLegal(src, dest) {
    /*  MOVE PATTERN
           XOXOX
           OXXXO
           XXPXX
           OXXXO
           XOXOX
    */
    const srcY = src[0];
    const srcX = src[1];
    const destY = dest[0];
    const destX = dest[1];

    if ((Math.abs(destY - srcY) === 2 && Math.abs(destX - srcX) === 1) ||
        (Math.abs(destX - srcX) === 2 && Math.abs(destY - srcY) === 1)) {
          return true;
    }
    return false;
  }
}