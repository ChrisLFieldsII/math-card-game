export default class Player {
    public name:string;
    public hand:any[];
    public completedTurn:boolean;
    public wins:number;
    public highScore:number;

    constructor(name:string) {
        this.name = name;
        this.hand = [];
        this.completedTurn = false;
        this.wins = 0;
        this.highScore = 0;
    }
}