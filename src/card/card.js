import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card" draggable="true" onDragStart={this.drag}>
                <span id="value">{this.props.value}</span>
            </div>
        );
    }

    drag(event) {
        console.log('drag started')
        event.dataTransfer.setData('text', event.target.id);
        console.log('data transfer obj:',event.dataTransfer)
    }
}

export default Card;
