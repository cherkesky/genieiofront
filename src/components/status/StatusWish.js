import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';

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
        <h1>StatusWish</h1>
      </div>
    )
  }
}

export default StatusWish
