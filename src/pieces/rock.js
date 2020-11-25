import Obstacle from './obstacle.js';
export default class Rock extends Obstacle {
    constructor(player){
        //super(player,"react-chess/src/pieces/rock.png");
        super(player, "http://t3.gstatic.com/images?q=tbn:ANd9GcReN9KWqKEGl0uRkdBWgcl-LaLK_8ecIzuBAhVBx9H82E40amLbEMYrZTc5fsgf4jxEpbAJaaV5znMbXHevmM0");
    }
}
