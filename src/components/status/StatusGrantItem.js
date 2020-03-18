import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import APIManager from '../../modules/APIManager'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

export class StatusGrantItem extends Component {
  

  handleGrantReject(grant_id) {
    APIManager.get("grants",grant_id)
    .then((grant) => {
      const updatedGrant = {
      id: grant.id,
      status: "rejected",
     
    }
    console.log(updatedGrant)
    APIManager.update("grants", updatedGrant)
    this.props.rerenderer()
    })
  }

  handleGrantApprove(grant_id) {
    APIManager.get("grants",grant_id)
    .then((grant) => {
      const updatedGrant = {
      id: grant.id,
      status: "approved",
     
    }
    console.log(updatedGrant)
    APIManager.update("grants", updatedGrant)
    this.props.rerenderer()

    })
  }

  render() {
    console.log("RENDER")
    return (
      <>
      
        <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">

          <b>Memo:</b> {this.props.grants.memo} <b>Status:</b>{this.props.grants.status}
          {(this.props.grants.status) === 'pending'

            ?
            <>
              <Button
                id={this.props.grants.id}
                variant="contained"
                color="secondary"
                style={{ background: '#DC42CC' }}
                onClick={() => {
                  this.handleGrantApprove(this.props.grants.id)
                }}> Accept </Button>

              <Button
                id={this.props.grants.id}
                variant="contained"
                color="default"
                style={{ background: '#FFFFFF' }}
                onClick={() => {
                  this.handleGrantReject(this.props.grants.id)
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
