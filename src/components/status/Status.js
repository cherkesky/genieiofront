import React, { Component } from 'react'
// import StatusWish from './StatusWish'
import StatusGrant from './StatusGrant'
import APIManager from '../../modules/APIManager';
import StatusWish from './StatusWish' 

export class Status extends Component {
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
      <>
        <h1>My Wishes</h1>
        {this.state.my_wishes.map((wishes) => 
        <StatusWish
         key={wishes.id} 
         wishes={wishes}
        {...this.props}
        
        />)}    
        
        <StatusGrant
        wishes = {this.state.my_wishes}
        />
      </>
    )
  }
}

export default Status
