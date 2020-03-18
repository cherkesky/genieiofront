import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

export class Home extends Component {

  state = {
    word_vaules: []
  }

  componentDidMount() {
     APIManager.getAll('words_counter?word_values=count')
      .then((res) => {
        this.setState({ word_vaules: res })
      }) 
  }


  render() {
    return (
      <div>
        <h1>HOME</h1>
      </div>
    )
  }
}

export default Home
