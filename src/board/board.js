import React, { Component } from 'react';
import Deck from '../deck/deck';
import PlayerDeck from '../deck/playerDeck';
import Card from '../card/card';
import './board.css';

const topPlayerDeck = new PlayerDeck('top', []);
const bottomPlayerDeck = new PlayerDeck('bottom', []);

/** State:
 *  - deck = the current, already shuffled deck for the game
    - topPlayerDeck = reps whole deck for top player
    - bottomPlayerDeck = reps whole deck for bottom player
    - topPlayerCardsOnBoard = reps top players cards on board
    - bottomPlayerCardsOnBoard = reps bottom players cards on board
 */
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: new Deck(),
            topPlayerDeck: topPlayerDeck,
            bottomPlayerDeck: bottomPlayerDeck,
            topPlayerCardsOnBoard: new Array(5).fill(null),
            bottomPlayerCardsOnBoard: new Array(5).fill(null),
        };
    }

    /** Splits deck in half and assigns a half to each player. */
    componentDidMount() {
        let deckSize = this.state.deck.deckSize;
        let topDeck = this.state.deck.deck.slice(0, deckSize/2);
        let bottomDeck = this.state.deck.deck.slice(deckSize/2);
        this.setState({
            topPlayerDeck: topPlayerDeck.deck = topDeck,
            bottomPlayerDeck: bottomPlayerDeck.deck = bottomDeck,
        });
        this.setState({
            topPlayerCardsOnBoard: this.state.topPlayerDeck.deck.splice(0,5),
            bottomPlayerCardsOnBoard: this.state.bottomPlayerDeck.deck.splice(0,5),
        });
        console.log('top starting deck',this.state.topPlayerDeck)
        console.log('bottom starting deck',this.state.bottomPlayerDeck)
    }

    // <Card value={this.state.deck.deck[0]} />
    render() {
        return (
            <div className="container-fluid" id="board">
                {/* start of top player */}
                <div className="row row-border" id="topPlayerBackRow">
                    <div id="topPlayerIcon" className="col-lg-1 player-icon">Top Player</div>
                    <div className="col-lg-2"><Card id="topCard1" className="card" value={this.state.topPlayerCardsOnBoard[0]} /></div>
                    <div className="col-lg-2"><Card id="topCard2" className="card" value={this.state.topPlayerCardsOnBoard[1]} /></div>
                    <div className="col-lg-2"><Card id="topCard3" className="card" value={this.state.topPlayerCardsOnBoard[2]} /></div>
                    <div className="col-lg-2"><Card id="topCard4" className="card" value={this.state.topPlayerCardsOnBoard[3]} /></div>
                    <div className="col-lg-2"><Card id="topCard5" className="card" value={this.state.topPlayerCardsOnBoard[4]} /></div>
                </div>
                <div className="row row-border" id="topPlayerFrontRow">
                    {/* working on drag-drop. throws error atm. tpch = top player card holder */}
                    <div id="tpch1" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="tpch2" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="tpch3" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="tpch4" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="tpch5" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                </div>
                {/* start of bottom player */}
                <div className="row row-border" id="bottomPlayerFrontRow">
                    <div id="bpch1" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="bpch2" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="bpch3" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="bpch4" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    <div id="bpch5" className="col-lg-2 card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                </div>
                <div className="row row-border rel-wrapper" id="bottomPlayerBackRow">
                    <div className="col-lg-2"><Card id="bottomCard1" className="card" value={this.state.bottomPlayerCardsOnBoard[0]} /></div>
                    <div className="col-lg-2"><Card id="bottomCard2" className="card" value={this.state.bottomPlayerCardsOnBoard[1]} /></div>
                    <div className="col-lg-2"><Card id="bottomCard3" className="card" value={this.state.bottomPlayerCardsOnBoard[2]} /></div>
                    <div className="col-lg-2"><Card id="bottomCard4" className="card" value={this.state.bottomPlayerCardsOnBoard[3]} /></div>
                    <div className="col-lg-2"><Card id="bottomCard5" className="card" value={this.state.bottomPlayerCardsOnBoard[4]} /></div>
                    <div id="bottomPlayerIcon" className="col-lg-1 player-icon to-bottom">Bottom Player</div>
                </div>
            </div>
        );
    }

    /** Shuffles deck a few more times and splits it in half and assigns half to each player */
    startGame() {
        for (let x=0; x<5; x++) this.state.deck.shuffleArray(this.state.deck.deck);
        let half = this.state.deck.deckSize / 2;
    }

    allowDrop(event) {
        event.preventDefault();
    }

    drop(event) {
        event.preventDefault();
        let card = event.dataTransfer.getData('text');
        let targetId = event.target.id;
        // if ensures player can only put cards on their row
        if ((card.startsWith('b') && targetId.startsWith('b')) || (card.startsWith('t') && targetId.startsWith('t')))
            event.target.appendChild(document.getElementById(card));
    }
}

export default Board;
