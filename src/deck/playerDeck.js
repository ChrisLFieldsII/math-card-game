export default class PlayerDeck {
    constructor(_deckOwner, _deck) {
        this._deckOwner = _deckOwner;
        this._deck = _deck;
    }
    get deck() {
        return this._deck.slice(); //return a copy
    }
    set deck(deck) {
        this._deck = deck;
    }
    get deckOwner() {
        return this._deckOwner;
    }
}
