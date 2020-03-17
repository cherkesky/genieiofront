import React, { Component } from 'react'
// import StatusGrantItem from './StatusGrantItem'
import APIManager from '../../modules/APIManager';

export class StatusGrant extends Component {
state = {
  grant_requests:[]
}

  componentDidMount(){
    setTimeout(()=>{ 
      APIManager.getAll(`grants?by_wish=id`)
      .then((result) => {
        this.setState({
          grant_requests: result
        })
      }) 
  }, 1000)
   
  }

  render() {
    return (
      <>
        <h1>Received Grant Requests</h1>   

        {/* {this.props.wishes.map((wishes) => 
        <StatusGrantItem
         key={wishes.id} 
         wishes={wishes}
        {...this.props}
        />)}  */}
      </>
    )
  }
}

export default StatusGrant
