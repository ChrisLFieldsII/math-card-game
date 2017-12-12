import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card"><span id="value">{this.props.value}</span></div>
        );
    }
}

export default Card;
