import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import WordCloud from './WordCloud'

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
        <WordCloud/>
      </div>
    )
  }
}

export default Home
