import React, { Component } from 'react'
import Card from './Card'

const deck = require('../cards.json')

class App extends Component {
    
    render() {
      return (
        <div className="container">
            <Card deck={deck} />
        </div>
      )
    }
}

export default App
  