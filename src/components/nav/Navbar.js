import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
  render() {
    return (
      this.props.isAuthenticated()
      ?
      <div>
        <AppBar position="static" color="secondary" style={{ background: '#3E3E3E' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              {/* Logo */}
              <img alt="logo" src={require("../../assets/logo.png")} width="180px" height="80px" onClick={() => { this.props.history.push("/home") }}></img>
            </IconButton>
            <Button color="inherit" onClick={() => {
              this.props.history.push("/wishes")
            }}>Wishes</Button>
            <Button color="inherit" onClick={() => {
              this.props.history.push("/grants")
            }}>Grants</Button>
            <Button color="inherit" onClick={() => {
              this.props.history.push("/status")
            }}>Status</Button>
            <Button color="inherit" onClick={() => {
              this.props.history.push("/inbox")
            }}>Inbox</Button>
            <Button color="inherit" onClick={() => {
              this.props.logoutUser()
            }}>Logout</Button>

          </Toolbar>
        </AppBar>
      </div>
      :null
    )
  }
}

export default withRouter(Navbar)
