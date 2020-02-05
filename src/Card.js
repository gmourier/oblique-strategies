import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: this.props.deck[this.randomRange(this.props.deck.length)]
        }
    }
    
    selectCard() {
        this.setState({
            selectedCard: this.props.deck[this.randomRange(this.props.deck.length)]
        })
    }

    randomRange(length) {
        return Math.floor(Math.random() * length)
    }

    render() {
        return (
            <div className="card" onClick={this.selectCard.bind(this)}>
                {this.state.selectedCard.content}
            </div>
        )
    }
}

export default Card