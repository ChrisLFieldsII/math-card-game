import React, { Component } from 'react';
import Card from '../card/card';
import Deck from '../deck/deck';
import Player from '../player/player';
import Menu from '../menu/menu';
import './board.css';
import '../util/performCalc';
import performCalc from '../util/performCalc';

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
        return (
            <div className="container-fluid" id="board">
                <Menu id="menu" />
                {/* start of top player. id convention in desc.txt */}
                <div className="row row-border" id="topPlayerBackRow">
                    <div id="topPlayerIcon" className="col-lg-1 player-icon" onClick={() => this.getTopsTotal()}>Top Player<br />(Click to finalize turn)</div>
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
                    <div id="bottomPlayerIcon" className="col-lg-1 player-icon to-bottom" onClick={() => this.getBottomsTotal()}>Bottom Player<br />(Click to finalize turn)</div>
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
        let num1 = this.tch1.firstChild.firstChild.innerText
        let sym1 = this.tch2.firstChild.firstChild.innerText
        let num2 = this.tch3.firstChild.firstChild.innerText
        let sym2 = this.tch4.firstChild.firstChild.innerText
        let num3 = this.tch5.firstChild.firstChild.innerText
        let total = 0
        total += performCalc(num1, num2, sym1)
        total = performCalc(total, num3, sym2)
        console.log('top total: ', total);
        //changing multiple properties of one object with setState react
        this.setState({
            topPlayer: !this.state.topPlayer.completedTurn,
        });

    }

    /** FIX!!! - Gets bottom player's total and sets their [completedTurn] state to true when their icon is clicked */
    getBottomsTotal() {
        let num1 = Number(document.getElementById('BfrN1').innerText);
        let num2 = Number(document.getElementById('BfrN3').innerText);
        let num3 = Number(document.getElementById('BfrN5').innerText);
        let sym1 = document.getElementById('BfrY2').innerText;
        let sym2 = document.getElementById('BfrY4').innerText;
        let total = 0;
        total += this.performCalc(num1, num2, sym1);
        total = this.performCalc(total, num3, sym2);
        this.setState({
            bottomPlayer: !this.state.bottomPlayer.completedTurn,
        });
        console.log('bottom total: ', total);
    }

    roundOver() {

    }
}

export default Board;
