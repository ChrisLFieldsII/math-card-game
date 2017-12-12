export default class PlayerDeck {

    constructor(private _deckOwner:string, private _deck:any[]) {}

    get deck() {
        return this._deck.slice(); //return a copy
    }
    set deck(deck:any[]) {
        this._deck = deck;
    }

    get deckOwner() {
        return this._deckOwner;
    }
}
