import React, { Component } from 'react'
import ApiManager from '../../modules/APIManager';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Wishes extends Component {

  state = {
    composedWish: ''
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
    console.log(newWish)


    ApiManager.post("wishes",newWish)
    .then(this.props.history.push("/home"))
  }
  render() {
    return (
      <div>  
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
        InputProps={{ style: { fontSize: 100 } }}
        onChange={this.handleFieldChange}
      />
      <hr />
      

      <Button variant="contained" color="secondary" style={{ background: '#DC42CC' }} onClick={() => {

        this.handleSend()
      }}>
        Send
        </Button>
        </div>
    )
  }
}

export default Wishes
