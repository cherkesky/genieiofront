import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
             GenieIO  {/* Logo placeholder */}
            </IconButton> 
            <Button color="inherit" onClick={()=>{
              this.props.history.push("/wishes")
            }}>Wishes</Button>
            <Button color="inherit" onClick={()=>{
              this.props.history.push("/grants")
            }}>Grants</Button>
            <Button color="inherit" onClick={()=>{
              this.props.history.push("/status")
            }}>Status</Button>
            <Button color="inherit" onClick={()=>{
              this.props.history.push("/inbox")
            }}>Inbox</Button>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withRouter(Navbar)
