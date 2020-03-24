import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import WordCloudNoAuth from '../guest/WordCloudNoAuth'

export class Guest extends Component {
  state = {
    word_values: []
  }

  componentDidMount() {
    APIManager.getAllNoAuth('words_counter?word_values=count')
      .then((res) => {
        this.setState({ word_values: res })
      })

  }
  render() {
    return (
      <>
        <WordCloudNoAuth
          word_values={this.state.word_values}
          {...this.props}
        />

      </>
    )
  }
}

export default Guest
