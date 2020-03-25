import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  parent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    position: 'relative',
    background: '#3E3E3E'
  },

  navbuttons: {
    marginTop: "auto",
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '30px'

  }
}

export class Navbar extends Component {
  render() {
    return (
      this.props.isAuthenticated()
        ?
        <div>
          <AppBar position="static" color="secondary" style={{background: '#3E3E3E'}}>
            <Toolbar  style={{justifyContent: 'space-between'}}>

              <div id="logo" style={{ justifyContent: 'right' }}>
                <img alt="logo" src={require("../../assets/logo.png")} width="180px" height="80px" onClick={() => { this.props.history.push("/home") }}></img>
              </div>

              <div id="buttons">
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
                <Button color="default" onClick={() => {
                  this.props.logoutUser()
                }}>Logout</Button>
              </div>

            </Toolbar>
          </AppBar>
        </div>
        : null
    )
  }
}

export default withRouter(Navbar)
