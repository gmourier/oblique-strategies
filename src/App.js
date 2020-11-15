import React, { Component } from 'react'
import Card from './Card'
import LanguageChoice from './LanguageChoice'

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
    	const selectedLanguage = event.target.getAttribute('lang')
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
				<LanguageChoice selectLanguage={this.selectLanguage} selectedLanguage={this.state.selectedLanguage} />
			</div>
		)
	}
}

export default App
  