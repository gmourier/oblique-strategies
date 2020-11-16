import React, { Component } from 'react'

const languages = ['en', 'fr']

class LanguageChoice extends Component {
    render() {
        return (
            <div className="languageChoice">
                {languages.map((language) => (
                    <a 
                        lang={language} 
                        className={this.props.selectedLanguage === language ? `link-active` : ``}
                        onClick={this.props.selectLanguage}
                        key={language}
                    >
                        {language.toUpperCase()}
                    </a>
                ))}
            </div>
        )
    }
}

export default LanguageChoice