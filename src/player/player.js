exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.hand = [];
        this.completedTurn = false;
        this.wins = 0;
        this.highScore = 0;
        this.currentScore = 0;
        this.roundsArray = [];
    }
    return Player;
}());
exports["default"] = Player;
