/***************************************** MUST BE COMPILED AFTER EACH EDIT
 *                                         tsc .\deck.ts --target ES2016
*/

/** Reps deck in the game.  */
export default class Deck {
    readonly numbers = [1,2,3,4,5,6,7,8,9];
    readonly symbols = ['+','-','*','/'];
    private _deckSize:number;
    private _deck:any[] = [];

    // default numOfEachCard = 8 if not specified via constructor
    constructor(private numOfEachCard=8) {
        this.generateDeck();
        this._deckSize = this._deck.length;
    }

    get deckSize() {
        return this._deckSize;
    }

    get deck() {
        return this._deck.slice(); //return a copy
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateDeck() {
        for (let x=0; x<this.numbers.length; x++) {
            for (let y=0; y<this.numOfEachCard; y++) {
                this._deck.push(this.numbers[x]);
            }
        }

        for (let x=0; x<this.symbols.length; x++) {
            for (let y=0; y<this.numOfEachCard; y++) {
                this._deck.push(this.symbols[x]);
            }
        }

        for (let x=0; x<5; x++) {
            this.shuffleArray(this._deck);
        }
        console.log('deck generated',this._deck);
    }



}
