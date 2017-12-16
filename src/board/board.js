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

    render() {
        return (
            <div className="container-fluid" id="board">
                {/* start of top player */}
                <div className="row row-border" id="topPlayerBackRow">
                    <div id="topPlayerIcon" className="col-lg-1 player-icon" onClick={() => this.playGame(this.state.topPlayerCardsOnBoard,'top')}>Top Player</div>
                    {/* tpbch = top player back card holder */}
                    <div className="col-lg-2">
                        <div id="tpbch1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="topCard1" className="from-top-left" value={this.state.topPlayerCardsOnBoard[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpbch2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="topCard2" className="from-top-left" value={this.state.topPlayerCardsOnBoard[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpbch3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="topCard3" className="from-top-left" value={this.state.topPlayerCardsOnBoard[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpbch4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="topCard4" className="from-top-left" value={this.state.topPlayerCardsOnBoard[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpbch5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="topCard5" className="from-top-left" value={this.state.topPlayerCardsOnBoard[4]} /></div>
                    </div>
                </div>
                <div className="row row-border" id="topPlayerFrontRow">
                    {/* tpfch(Y) = top player front card holder. Y is indicator that symbol should not go in card-holder */}
                    <div className="col-lg-2">
                        <div id="tpfch1Y" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpfch2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpfch3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpfch4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="tpfch5Y" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                {/* start of bottom player. bpfch(Y) = back player front card holder. Y is indicator that symbol should not go in card-holder */}
                <div className="row row-border" id="bottomPlayerFrontRow">
                    <div className="col-lg-2">
                        <div id="bpfch1Y" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpfch2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpfch3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpfch4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpfch5Y" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                <div className="row row-border rel-wrapper" id="bottomPlayerBackRow">
                    <div className="col-lg-2">
                        <div id="bpbch1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="bottomCard1" className="from-top-left" value={this.state.bottomPlayerCardsOnBoard[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpbch2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="bottomCard2" className="from-top-left" value={this.state.bottomPlayerCardsOnBoard[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpbch3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="bottomCard3" className="from-top-left" value={this.state.bottomPlayerCardsOnBoard[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpbch4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="bottomCard4" className="from-top-left" value={this.state.bottomPlayerCardsOnBoard[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="bpbch5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="bottomCard5" className="from-top-left" value={this.state.bottomPlayerCardsOnBoard[4]} /></div>
                    </div>
                    <div id="bottomPlayerIcon" className="col-lg-1 player-icon to-bottom" onClick={() => this.playGame(this.state.bottomPlayerCardsOnBoard,'bottom')}>Bottom Player</div>
                </div>
            </div>
        );
    }

    /** Shuffles deck a few more times and splits it in half and assigns half to each player */
    startGame() {
        for (let x=0; x<5; x++) this.state.deck.shuffleArray(this.state.deck.deck);
        let half = this.state.deck.deckSize / 2;
    }

    drag(event) {
        console.log('drag started')
        event.dataTransfer.setData('text', event.target.id);
        console.log('data transfer obj:',event.dataTransfer)
    }

    allowDrop(event) {
        console.info('allowDrop event occurred');
        event.preventDefault();
    }

    drop(event) {
        console.info('drop event occurred');
        event.preventDefault();
        let cardId = event.dataTransfer.getData('text');
        let targetId = event.target.id; // target of drop
        // if ensures player can only put cards on their row
        if ((cardId.startsWith('b') && targetId.startsWith('b')) || (cardId.startsWith('t') && targetId.startsWith('t')))
            event.target.appendChild(document.getElementById(cardId));
    }

    /**
     * 
     * @param {Object[]} cardsOnBoardArr Represents players 5 cards on board
     * @param {string} player String thats either 'top' or 'bottom' to set state
     * 
     */
    playGame(cardsOnBoardArr, player) {
        console.log(`${player} has these cards on board: ${JSON.stringify(cardsOnBoardArr)}`);
        cardsOnBoardArr.forEach(element => {
            if (isNaN(element)) {

            }
        });
    }
}

export default Board;
