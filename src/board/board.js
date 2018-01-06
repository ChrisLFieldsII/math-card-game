import React, { Component } from 'react';
import Card from '../card/card';
import Deck from '../deck/deck';
import Player from '../player/player.js';
import Menu from '../menu/menu';
import './board.css';
import '../util/performCalc';
import performCalc from '../util/performCalc';
import roundNumber from '../util/roundNumber';

/** State:
 *  -
 */
class Board extends Component {
    deck = new Deck();

    constructor(props) {
        super(props);
        // set up player references and initial hands
        const topPlayer = new Player('top');
        topPlayer.hand = this.deck.dealHand();
        console.log('top player hand: ', topPlayer.hand);
        const bottomPlayer = new Player('bottom');
        bottomPlayer.hand = this.deck.dealHand();
        console.log('bottom player hand: ', bottomPlayer.hand);
        // set state
        this.state = {
            topPlayer: topPlayer,
            bottomPlayer: bottomPlayer,
        };
    }

    componentDidMount() {
        console.dir('top', this.state.topPlayer);
        console.dir('bottom', this.state.bottomPlayer);
    }

    render() {
        let top = this.state.topPlayer
        let bot = this.state.bottomPlayer
        
        // find way to check if player completed turn
        if (top.completedTurn && bot.completedTurn) {
            alert('round over')

            // at end re-enable player icons
            this.enableIcon(this.topIcon)
            this.enableIcon(this.botIcon)
        }

        return (
            <div className="container-fluid" id="board">
                <Menu id="menu" topRoundsArray={} botRoundsArray={} />
                {/* start of top player. id convention in desc.txt */}
                <div className="row row-border" id="topPlayerBackRow">
                    <button id="topPlayerIcon" ref={input => this.topIcon = input} className="col-lg-1 player-icon" type="button" onClick={() => this.getTopsTotal()}>Top Player<br />(Click to finalize turn)</button>
                    <div className="col-lg-2">
                        {/* tc1 = top card 1; tch1 = top card holder 1. MIGHT REMOVE CARD REFS */}
                        <div id="TbrY1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard1Y" ref={input => this.tc1 = input} className="from-top-left" value={this.state.topPlayer.hand[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard2Y" ref={input => this.tc2 = input} className="from-top-left" value={this.state.topPlayer.hand[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard3" ref={input => this.tc3 = input} className="from-top-left" value={this.state.topPlayer.hand[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard4" ref={input => this.tc4 = input} className="from-top-left" value={this.state.topPlayer.hand[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard5" ref={input => this.tc5 = input} className="from-top-left" value={this.state.topPlayer.hand[4]} /></div>
                    </div>
                </div>
                <div className="row row-border" id="topPlayerFrontRow">
                    <div className="col-lg-2">
                        <div id="TfrN1" ref={input => this.tch1 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrY2" ref={input => this.tch2 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrN3" ref={input => this.tch3 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrY4" ref={input => this.tch4 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrN5" ref={input => this.tch5 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                {/* start of bottom player. id convention in desc.txt */}
                <div className="row row-border" id="bottomPlayerFrontRow">
                    <div className="col-lg-2">
                        <div id="BfrN1" ref={input => this.bch1 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrY2" ref={input => this.bch2 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrN3" ref={input => this.bch3 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrY4" ref={input => this.bch4 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrN5" ref={input => this.bch5 = input} className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                <div className="row row-border rel-wrapper" id="bottomPlayerBackRow">
                    <div className="col-lg-2">
                        <div id="BbrY1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard1Y" ref={input => this.bc1 = input} className="from-top-left" value={this.state.bottomPlayer.hand[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard2Y" ref={input => this.bc2 = input} className="from-top-left" value={this.state.bottomPlayer.hand[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard3" ref={input => this.bc3 = input} className="from-top-left" value={this.state.bottomPlayer.hand[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard4" ref={input => this.bc4 = input} className="from-top-left" value={this.state.bottomPlayer.hand[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard5" ref={input => this.bc5 = input} className="from-top-left" value={this.state.bottomPlayer.hand[4]} /></div>
                    </div>
                    <button id="bottomPlayerIcon" ref={input => this.botIcon = input} className="col-lg-1 player-icon to-bottom" type="button" onClick={() => this.getBottomsTotal()}>Bottom Player<br />(Click to finalize turn)</button>
                </div>
            </div>
        );
    }

    drag(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    allowDrop(event) {
        event.preventDefault();
    }

    drop(event) {
        event.preventDefault();
        if (event.target.childNodes.length === 1) {
            alert('Invalid move\nA card is already placed there.')
            return
        }
        let cardId = event.dataTransfer.getData('text');
        let targetId = event.target.id; // target of drop    
        // if ensures player can only put cards on their row
        if ((cardId.startsWith('B') && targetId.startsWith('B')) || (cardId.startsWith('T') && targetId.startsWith('T')))
            // card ends with 'Y' if it reps a symbol.
            if ((cardId.endsWith('Y') && targetId.charAt(3) === 'Y') || (!(cardId.endsWith('Y')) && (!(targetId.charAt(3) === 'Y'))))
                event.target.appendChild(document.getElementById(cardId));
            else if (targetId.includes('br'))
                event.target.appendChild(document.getElementById(cardId));
            else alert('Invalid move.\nA math symbol can only go in 2nd and 4th slot on your front row.');
        else alert('Invalid move\nYou can only make a move within your 2 rows.');
    }

    /** Gets top player's total and sets their [completedTurn] state to true when their icon is clicked */
    getTopsTotal() {
        let num1 = Number(this.tch1.firstChild.firstChild.innerText)
        let sym1 = this.tch2.firstChild.firstChild.innerText
        let num2 = Number(this.tch3.firstChild.firstChild.innerText)
        let sym2 = this.tch4.firstChild.firstChild.innerText
        let num3 = Number(this.tch5.firstChild.firstChild.innerText)
        let total = 0
        total += performCalc(num1, num2, sym1)
        //console.log('first perform calc:', total)
        total = performCalc(total, num3, sym2)
        //console.log('second perform calc:', total)
        total = roundNumber(total)
        console.log('top total: ', total);
        let topPlayerCopy = { ...this.state.topPlayer }
        topPlayerCopy.completedTurn = true
        topPlayerCopy.currentScore = total
        topPlayerCopy.roundsArray.push(total)
        if (total > topPlayerCopy.highScore) topPlayerCopy.highScore = total
        this.setState({
            topPlayer: topPlayerCopy
        });
        this.disableIcon(this.topIcon)              
    }

    /** Gets bottom player's total and sets their [completedTurn] state to true when their icon is clicked */
    getBottomsTotal() {
        let num1 = Number(this.bch1.firstChild.firstChild.innerText)
        let sym1 = this.bch2.firstChild.firstChild.innerText
        let num2 = Number(this.bch3.firstChild.firstChild.innerText)
        let sym2 = this.bch4.firstChild.firstChild.innerText
        let num3 = Number(this.bch5.firstChild.firstChild.innerText)
        let total = 0
        total += performCalc(num1, num2, sym1)
        total = performCalc(total, num3, sym2)
        total = roundNumber(total)
        console.log('bottom total: ', total);
        let botPlayerCopy = { ...this.state.bottomPlayer }
        botPlayerCopy.completedTurn = true
        botPlayerCopy.currentScore = total
        botPlayerCopy.roundsArray.push(total)
        if (total > botPlayerCopy.highScore) botPlayerCopy.highScore = total
        this.setState({
            bottomPlayer: botPlayerCopy
        });
        this.disableIcon(this.botIcon)      
    }

    disableIcon(icon) {
        icon.disabled = true
        icon.style.backgroundColor = 'lightgrey'
        icon.onhover = icon.style.cursor = 'not-allowed'
    }

    enableIcon(icon) {
        icon.disabled = false
        icon.style.backgroundColor = 'orange'
        icon.onhover = icon.style.cursor = 'pointer'
    }
}

export default Board;
