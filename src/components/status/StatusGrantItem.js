import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import APIManager from '../../modules/APIManager'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export class StatusGrantItem extends Component {


  handleGrantReject(grant_id) {
    APIManager.get("grants", grant_id)
      .then((grant) => {
        const updatedGrant = {
          id: grant.id,
          status: "Rejected",
        }
        APIManager.update("grants", updatedGrant)
        this.props.rerenderer()
      })
  }

  handleGrantApprove(grant_id) {
    APIManager.get("grants", grant_id)
      .then((grant) => {
        const updatedGrant = {
          id: grant.id,
          status: "Approved",
        }
        APIManager.update("grants", updatedGrant)
        this.props.rerenderer()
      })
  }

  render() {

    return (
      <>

        <TableRow key={this.props.grants.id} hover={true} align="center" >
          <TableCell component="th" scope="row"> {(this.props.grants.wish.url).substring(29, 31)}</TableCell>
          <TableCell align="center"> {this.props.grants.memo} </TableCell>
          <TableCell align="center"> {this.props.grants.status} </TableCell>
          <TableCell align="center"> 
          {(this.props.grants.status) === 'Pending'
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
          : "None"
        }
         </TableCell>

        </TableRow>

      </>
    )
  }
}

export default StatusGrantItem
