import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card" draggable="true" onDragStart={this.drag} id={this.props.id} ref={input => this.card = input}>
                <span className="value">{this.props.value}</span>
            </div>
        );
    }

    componentDidMount() {
        this.card.onmousedown = () => this.card.style.cursor = 'grabbing';
        this.card.onmouseup = () => this.card.style.cursor = 'grab';
    }

    drag(event) {
        event.dataTransfer.setData('text', event.target.id);
    }
}

export default Card;
