import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';

export class StatusGrantItem extends Component {
  render() {
    return (
      <>
        <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">

          <b>Memo:</b> {this.props.grants.memo} <b>Status:</b>{this.props.grants.status}
          <Button
          id={this.props.grants.id}
          variant="contained" 
          color="secondary" 
          style={{ background: '#DC42CC' }} 
          onClick={() => {
            this.props.history.push("/")
          }}>Accept </Button>

          <Button 
          id={this.props.grants.id}
          variant="contained" 
          color="default" 
          style={{ background: '#FFFFFF' }} 
          onClick={() => {
            this.props.history.push("/")
          }}>Reject </Button>

        </Box>
        <br/><br/>

      </>
    )
  }
}

export default StatusGrantItem
