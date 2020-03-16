import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import StatusWishItem from './StatusWishItem'
export class StatusWish extends Component {
state={
  my_wishes:[]
}


componentDidMount(){
  APIManager.getAll("wishes?my_wishes=id")
  .then((result) => {
    this.setState({
      my_wishes: result
    })
  });



} // closer componentDidMount

  render() {
    return (
      <div>
        <h1>My Wishes</h1>
        {this.state.my_wishes.map((wishes) => 
        <StatusWishItem
         key={wishes.id} 
         wishes={wishes}
        {...this.props}/>)}
      </div>
    )
  }
}

export default StatusWish
