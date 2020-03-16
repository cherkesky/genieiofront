import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Guest from "./components/guest/Guest"
import Home from "./components/home/Home"
import Wishes from "./components/wishes/Wishes"
import Grants from "./components/grants/Grants"
import Status from "./components/status/Status"
import Inbox from "./components/inbox/Inbox"

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
         <Route exact path="/home" render={(props) => {
          return <Home
            {...props}
            {...this.props} />
        }} />
           <Route exact path="/wishes" render={(props) => {
          return <Wishes
            {...props}
            {...this.props} />
        }} />
           <Route exact path="/grants" render={(props) => {
          return <Grants
            {...props}
            {...this.props} />
        }} />
           <Route exact path="/status" render={(props) => {
          return <Status
            {...props}
            {...this.props} />
        }} />
           <Route exact path="/inbox" render={(props) => {
          return <Inbox
            {...props}
            {...this.props} />
        }} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews
