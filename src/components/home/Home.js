import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import WordCloud from './WordCloud'

export class Home extends Component {

  state = {
    word_values: []
  }

  componentDidMount() {
     APIManager.getAll('words_counter?word_values=count')
      .then((res) => {
        this.setState({ word_values: res })
      }) 

  }


  render() {
    return (
      <>
        <WordCloud
        word_values = {this.state.word_values}
        />
      </>
    )
  }
}

export default Home
