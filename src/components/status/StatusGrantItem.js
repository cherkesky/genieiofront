import React, { Component } from 'react'

export class StatusGrantItem extends Component {
  render() {
    return (
      <>
          <p>#{this.props.wishes.wish_body}</p>
      </>
    )
  }
}

export default StatusGrantItem
