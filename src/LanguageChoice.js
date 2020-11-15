import React, { Component } from 'react'

class LanguageChoice extends Component {
    render() {
        return (
            <div className="languageChoice">
                <a 
                    lang="en" 
                    className={this.props.selectedLanguage === 'en' ? `link-active` : ``}
                    onClick={this.props.selectLanguage} 
                >
                    En
                </a>
                <a
                    lang="fr" 
                    className={this.props.selectedLanguage === 'fr' ? `link-active` : ``} 
                    onClick={this.props.selectLanguage} 
                >
                    Fr
                </a>
            </div>
        )
    }
}

export default LanguageChoice