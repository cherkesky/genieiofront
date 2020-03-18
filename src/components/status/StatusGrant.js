import React, { Component } from 'react'
import StatusGrantItem from './StatusGrantItem'
import APIManager from '../../modules/APIManager';

export class StatusGrant extends Component {
state = {
  grant_requests:[],
}

 rerenderer=()=>{
  console.log("RERENDERER")
  setTimeout(()=>{ 
    APIManager.getAll(`grants?by_wish=id`)
    .then((result) => {
      this.setState({
        grant_requests: result
      })
    }) 
}, 100)
 
}

  componentDidMount(){
    setTimeout(()=>{ 
      APIManager.getAll(`grants?by_wish=id`)
      .then((result) => {
        this.setState({
          grant_requests: result
        })
      }) 
  }, 100)
   
  }

  render() {
    return (
      <>
        <h1>Received Grant Requests</h1>   

        {this.state.grant_requests.map((grants) => 
        <StatusGrantItem
         key={grants.id} 
         grants={grants}
         rerenderer ={this.rerenderer}
        {...this.props}
        />)} 
      </>
    )
  }
}

export default StatusGrant
