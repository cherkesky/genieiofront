import React, { Component } from 'react'
import Logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';

export class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div>
        <Button variant="contained" color="secondary" onClick={()=>{
          this.props.history.push("/login")
        }}>Login </Button>
        <Button variant="contained" color="default" onClick={()=>{
          this.props.history.push("/register")
        }}>Register </Button>
        </div>
        <div>
        <Button href="#text-buttons" color="default" onClick={()=>{
          this.props.history.push("/guest")
        }}>Just a guest</Button>
        </div>
      </>
    )
  }
}

export default Welcome

