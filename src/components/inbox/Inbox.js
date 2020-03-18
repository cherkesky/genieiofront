import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import InboxItem from './InboxItem'

export class Inbox extends Component {
  state={
    my_grants:[]
  }

  componentDidMount(){
    APIManager.getAll("grants?by_wish=id")
    .then((result) => {
      this.setState({
        my_grants: result
      })
    });
  } // closer componentDidMount

  render() {
    return (
      <div>
        <h1>INBOX</h1>
        <InboxItem/>
      </div>
    )
  }
}

export default Inbox
