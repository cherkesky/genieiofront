import React, { Component } from 'react'
import StatusWish from './StatusWish'
import StatusGrant from './StatusGrant'

export class Status extends Component {
  render() {
    return (
      <>
      <StatusWish/>
      <StatusGrant/>
      </>
    )
  }
}

export default Status
