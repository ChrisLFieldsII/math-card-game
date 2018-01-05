export default class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.completedTurn = false;
        this.wins = 0;
        this.highScore = 0;
        this.currentScore = 0;
    }
}
