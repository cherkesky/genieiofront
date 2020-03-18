import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';

export class StatusGrantItem extends Component {



  render() {
    return (
      <>
       { 2===1+1
        ? console.log("true")
        : console.log("false")}

        <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">

          <b>Memo:</b> {this.props.grants.memo} <b>Status:</b>{this.props.grants.status}
          { (this.props.grants.status) === 'pending'
          
          ? 
          <>
          <Button
            id={this.props.grants.id}
            variant="contained"
            color="secondary"
            style={{ background: '#DC42CC' }}
            onClick={() => {
              console.log("Accept", this.props.grants.id)
            }}> Accept </Button>

           <Button
            id={this.props.grants.id}
            variant="contained"
            color="default"
            style={{ background: '#FFFFFF' }}
            onClick={() => {
              console.log("Reject", this.props.grants.id)
            }}> Reject </Button>
          </>
            : null
          }

        </Box>
        <br /><br />

      </>
    )
  }
}

export default StatusGrantItem
