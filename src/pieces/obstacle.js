export default class Obstacle {
    constructor(player, iconUrl) {
        this.image = {backgroundImage: "url("+iconUrl+")"};
        this.player = player;
    }
}