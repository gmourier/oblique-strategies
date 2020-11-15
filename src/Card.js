import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: this.props.deck[this.randomRange(this.props.deck.length)],
            refreshCard: this.props.refreshCard
        }

        this.selectCard = this.selectCard.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.refreshCard !== prevState.refreshCard) {
            this.selectCard()
        }
    } 

    selectCard() {
        this.setState({
            selectedCard: this.props.deck[this.randomRange(this.props.deck.length)],
            refreshCard: !this.state.refreshCard
        })
    }

    randomRange(length) {
        return Math.floor(Math.random() * length)
    }

    render() {
        return (
            <div className="card" onClick={this.selectCard}>
                {this.state.selectedCard.content}
            </div>
        )
    }
}

export default Card