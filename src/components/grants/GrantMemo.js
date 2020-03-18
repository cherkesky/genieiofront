import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class GrantMemo extends Component {

  state = {
    wish_id: '',
    wish_body: '',
    memo: '',
  }

  handleFieldChange = e => {
    const stateToChange = {}
    stateToChange[e.target.id] = e.target.value
    this.setState(stateToChange)
  }

  handleSend() {
    const newMemo = {
      wish_id: this.state.wish_id,
      wish_body: this.state.wish_body,
      memo: this.state.memo,
      status: "pending"
    }
    console.log(newMemo)


    APIManager.post("grants",newMemo)
    .then(this.props.history.push("/home"))
  }

  componentDidMount() {
    APIManager.get("wishes", this.props.location.state.chosenGrant)
      .then((result) => {
        this.setState({
          wish_id: result.id,
          wish_body: result.wish_body
        })
      });
  }


  render() {
    const isEnabled = this.state.memo !== ''

    return (
      <>
        <h1>Grant Memo </h1>
        <p>You chose to grant the wish: <b>{this.state.wish_body}</b></p>
        <p>Please add a personal memo specifying what makes you the right person to grant this wish. </p>
        <TextField
          id="memo"
          label=""
          placeholder="Personal memo..."
          multiline
          rows="3"
          defaultValue=""
          margin="normal"
          variant="outlined"
          fullWidth
          InputProps={{ style: { fontSize: 100 } }}
          onChange={this.handleFieldChange}
        />
        <Button variant="contained" color="secondary" style={{background: '#DC42CC'}} 
         disabled={!isEnabled}
          onClick={() => {
          this.handleSend()
        }}>
          Grant
        </Button>
      </>
    )
  }
}

export default GrantMemo
