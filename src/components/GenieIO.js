import React, { Component } from 'react'
import NavBar from './nav/Navbar'
import ApplicationViews from '../ApplicationViews'

export class GenieIO extends Component {
  render() {
    return (
      <>
          <NavBar/>
          <ApplicationViews/>
      </>
    )
  }
}

export default GenieIO
