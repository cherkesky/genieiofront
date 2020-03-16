import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import LatestWishesItem from './LatestWishesItem'

export class LatestWishes extends Component {

  state = {
    wishes: []
  }

  componentDidMount() {
     APIManager.getAll('wishes?latest=5')
      .then((res) => {
        this.setState({ wishes: res })
      }) 
  }

  render() {
    return (
      <>
        <h1>Latest Wishes</h1>
        {this.state.wishes.map((wishes) => 
        <LatestWishesItem
         key={wishes.id} 
         wishes={wishes}
        {...this.props}/>)}
      </>
    )
  }
}

export default LatestWishes
