import React, { Component } from 'react'
import Card from './Card'


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: 'en',
			deck: require(`../assets/deck.en.json`),
			refreshCard: false
		}

		this.selectLanguage = this.selectLanguage.bind(this);
	}

	selectLanguage(event) {
    const selectedLanguage = event.target.value
		this.setState({
			selectedLanguage: selectedLanguage,
			deck: require(`../assets/deck.${selectedLanguage}.json`),
			refreshCard: true
		})
	}

	render() {
		return (
			<div className="container">
				<Card deck={this.state.deck} refreshCard={this.state.refreshCard} />

				<div className="radio">
					<label>
						<input type="radio" value="en" 
									checked={this.state.selectedLanguage === 'en'} 
									onChange={this.selectLanguage} />
						En
					</label>
				</div>
				<div className="radio">
					<label>
						<input type="radio" value="fr" 
									checked={this.state.selectedLanguage === 'fr'} 
									onChange={this.selectLanguage} />
						Fr
					</label>
				</div>
			</div>
		)
	}
}

export default App
  