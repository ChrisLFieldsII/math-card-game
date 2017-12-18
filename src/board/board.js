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
        const bottomPlayer = new Player('bottom');
        bottomPlayer.hand = this.deck.dealHand();
        // set state
        this.state = {
            topPlayer: topPlayer,
            bottomPlayer: bottomPlayer,
        };
    }

    componentDidMount() {
        console.dir('top',this.state.topPlayer);
        console.dir('bottom',this.state.bottomPlayer);
    }

    render() {
        return (
            <div className="container-fluid" id="board">
                <Menu id="menu" />
                {/* start of top player. id convention in desc.txt */}
                <div className="row row-border" id="topPlayerBackRow">
                    <div id="topPlayerIcon" className="col-lg-1 player-icon" onClick={() => this.getTopsTotal()}>Top Player<br/>(Click to finalize turn)</div>
                    <div className="col-lg-2">
                        <div id="TbrY1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard1Y" className="from-top-left" value={this.state.topPlayer.hand[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard2Y" className="from-top-left" value={this.state.topPlayer.hand[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard3" className="from-top-left" value={this.state.topPlayer.hand[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard4" className="from-top-left" value={this.state.topPlayer.hand[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TbrY5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="TopCard5" className="from-top-left" value={this.state.topPlayer.hand[4]} /></div>
                    </div>
                </div>
                <div className="row row-border" id="topPlayerFrontRow">
                    <div className="col-lg-2">
                        <div id="TfrN1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrN3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="TfrN5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                {/* start of bottom player. id convention in desc.txt */}
                <div className="row row-border" id="bottomPlayerFrontRow">
                    <div className="col-lg-2">
                        <div id="BfrN1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrN3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BfrN5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}></div>
                    </div>
                </div>
                <div className="row row-border rel-wrapper" id="bottomPlayerBackRow">
                    <div className="col-lg-2">
                        <div id="BbrY1" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard1Y" className="from-top-left" value={this.state.bottomPlayer.hand[0]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY2" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard2Y" className="from-top-left" value={this.state.bottomPlayer.hand[1]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY3" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard3" className="from-top-left" value={this.state.bottomPlayer.hand[2]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY4" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard4" className="from-top-left" value={this.state.bottomPlayer.hand[3]} /></div>
                    </div>
                    <div className="col-lg-2">
                        <div id="BbrY5" className="card-holder" onDragOver={this.allowDrop} onDrop={this.drop}><Card id="BottomCard5" className="from-top-left" value={this.state.bottomPlayer.hand[4]} /></div>
                    </div>
                    <div id="bottomPlayerIcon" className="col-lg-1 player-icon to-bottom" onClick={() => this.getBottomsTotal()}>Bottom Player<br/>(Click to finalize turn)</div>
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
        let cardId = event.dataTransfer.getData('text');
        let targetId = event.target.id; // target of drop
        // if ensures player can only put cards on their row
        if ((cardId.startsWith('B') && targetId.startsWith('B')) || (cardId.startsWith('T') && targetId.startsWith('T')))
            // card ends with 'Y' if it reps a symbol. 
            if ((cardId.endsWith('Y') && targetId.charAt(3)==='Y') || (!(cardId.endsWith('Y')) && (!(targetId.charAt(3)==='Y'))))
                event.target.appendChild(document.getElementById(cardId));
            else if (targetId.includes('br'))
                event.target.appendChild(document.getElementById(cardId));
            else alert('Invalid move.\nA math symbol can only go in 2nd and 4th slot on your front row.');
        else alert('Invalid move\nYou can only make a move within your 2 rows.');
    }

    /** Gets top player's total and sets their [completedTurn] state to true when their icon is clicked **/
    getTopsTotal() {
        let num1 = Number(document.getElementById('TfrN1').innerText);
        let num2 = Number(document.getElementById('TfrN3').innerText);
        let num3 = Number(document.getElementById('TfrN5').innerText);
        let sym1 = document.getElementById('TfrY2').innerText;
        let sym2 = document.getElementById('TfrY4').innerText;
        let total = 0;
        total += this.performCalc(num1,num2,sym1);
        total = this.performCalc(total,num3,sym2);
        // figure out how to set state...
        this.setState({
            topPlayer: !this.state.topPlayer.completedTurn,
        });
        console.log('top total: ',total);
    }

    /** Gets bottom player's total and sets their [completedTurn] state to true when their icon is clicked */
    getBottomsTotal() {
        let num1 = Number(document.getElementById('BfrN1').innerText);
        let num2 = Number(document.getElementById('BfrN3').innerText);
        let num3 = Number(document.getElementById('BfrN5').innerText);
        let sym1 = document.getElementById('BfrY2').innerText;
        let sym2 = document.getElementById('BfrY4').innerText;
        let total = 0;
        total += this.performCalc(num1,num2,sym1);
        total = this.performCalc(total,num3,sym2);
        this.setState({
            bottomPlayer: !this.state.bottomPlayer.completedTurn,
        });
        console.log('bottom total: ',total);
    }

    performCalc(x, y, sym) {
        performCalc(x, y, sym);
    }

    roundOver() {

    }
}

export default Board;
