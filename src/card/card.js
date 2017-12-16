import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card" draggable="true" onDragStart={this.drag} id={this.props.id}>
                <span id="value">{this.props.value}</span>
            </div>
        );
    }

    drag(event) {
        event.dataTransfer.setData('text', event.target.id);
    }
}

export default Card;
