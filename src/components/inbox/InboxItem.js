import React, { Component } from 'react'

export class InboxItem extends Component {
  render() {
    return (
      <>        
        {(this.props.grants.status==='approved')
        ?
        <p>
          <b> {this.props.grants.granter.user.first_name}</b> wants to grant your
        <b> {this.props.grants.wish.wish_body} </b> wish.
        now you can contact your granter at: <b> {this.props.grants.granter.cid} </b>
        </p>
        : <h3>No messages</h3> 
       }
      </>
    )
  }
}

export default InboxItem
