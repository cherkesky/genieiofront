import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Guest from '../guest/Guest'

const styles = {
  parent: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "auto",
    display: 'flex',
    background: "#DC42CC",
    flexDirection: 'column',
    justifyContent: 'baseline',
    padding: 30,
    height: 30,
  },
  front: {
    zIndex: '1',
    marginTop: '15%',
    marginLeft: '35%',
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
  }
}

export class Welcome extends Component {

  render() {
    return (
      <>
        <div style={styles.front}>
          <div>
            <img alt="logo" src={require("../../assets/logo_nbg.png")} width="380px" height="180px"
            ></img>
          </div>
          <Button variant="contained" color="secondary" onClick={() => {
            this.props.history.push("/login")
          }}>Login </Button>
          <Button variant="contained" color="default" onClick={() => {
            this.props.history.push("/register")
          }}>Register </Button>
          <Button color="default" onClick={() => {
            this.props.history.push("/guest")
          }}>Just a guest</Button>
        </div>
        <Guest />
      </>
    )
  }
}

export default Welcome

