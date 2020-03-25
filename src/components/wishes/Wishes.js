import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  parent: {
    marginTop: "auto",
    background: "lightgray",
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
    height: 30
  }
}

export class Wishes extends Component {

  state = {
    composedWish: '',
    xCord: 0,
    yCord: 0,
    state: [],
  }

  handleFieldChange = e => {
    const stateToChange = {}
    stateToChange[e.target.id] = e.target.value
    this.setState(stateToChange)
  }

  handleSend() {
    const newWish = {
      wish_body: this.state.composedWish,
      category: 1,
      location: 1
    }

    APIManager.post("wishes", newWish)
      .then(this.props.history.push("/home"))
  }

  displayLocationInfo = (position) => {
    this.setState({
      xCord: position.coords.latitude,
      yCord: position.coords.longitude
    })
    APIManager.getLocation(this.state.xCord, this.state.yCord)
      .then((location) => {
        this.setState({ state: location.results[0].address_components[5].short_name })
      })
  }




componentDidMount(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
  }
}

render() {
  return (
    <div style={styles.parent}>
      <h1>Send A Wish</h1>
      <TextField
        id="composedWish"
        label=""
        placeholder="I wish that..."
        multiline
        rows="3"
        defaultValue=""
        margin="normal"
        variant="outlined"
        fullWidth
        style={{ background: "#FFFFFF" }}
        InputProps={{ style: { fontSize: 100 } }}
        onChange={this.handleFieldChange}
      />
      <hr />

      <Button variant="contained" color="secondary" style={styles.button} onClick={() => {

        this.handleSend()
      }}>
        Send
        </Button>
    </div>
  )
}
}

export default Wishes
