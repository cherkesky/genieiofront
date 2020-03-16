import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Guest from "./components/guest/Guest"

export class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <Welcome {...props} />
          }}
        />
        <Route exact path="/login" render={(props) => {
          return <Login
            {...props}
            {...this.props} 
            />
        }} />
        <Route exact path="/register" render={(props) => {
          return <Register
            {...props}
            {...this.props} />
        }} />
        <Route exact path="/guest" render={(props) => {
          return <Guest
            {...props}
            {...this.props} />
        }} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews
