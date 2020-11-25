import Obstacle from './obstacle.js';
export default class Rock extends Obstacle {
    constructor(player){
        super(player,"rock.png");
        //super("https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg");
    }
}
