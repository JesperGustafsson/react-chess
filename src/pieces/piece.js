export default class Piece {
    constructor(player, iconUrl){
      this.player = player;
      //this.style = {backgroundImage: "url('"+iconUrl+"')"};
      this.image = {backgroundImage: "url('"+iconUrl+"')"};
      this.hp = 3;
      this.atk = 2;
    }

    step(dirX, dirY, srcX, srcY, steps = 1) {
      let destX = srcX + dirX*steps;
      let destY = srcY + dirY*steps;
  
      console.log(`destX: ${destX}, destY: ${destY}`);
  
      return [destX, destY];
    }
    
  }