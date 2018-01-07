export default class Player {
    public name:string;
    public hand:any[];
    public completedTurn:boolean;
    public wins:number;
    public highScore:number;
    public currentScore:number;
    public roundsArray:number[]; // holds all round valus for player

    constructor(name:string) {
        this.name = name;
        this.hand = [];
        this.completedTurn = false;
        this.wins = 0;
        this.highScore = 0;
        this.currentScore = 0;
        this.roundsArray = [];
    }
}