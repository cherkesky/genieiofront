import React, { Component } from 'react'
import StatusGrantItem from './StatusGrantItem'
import APIManager from '../../modules/APIManager';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

export class StatusGrant extends Component {
  state = {
    grant_requests: [],
  }

  rerenderer = () => {
    setTimeout(() => {
      APIManager.getAll(`grants?by_wish=id`)
        .then((result) => {
          this.setState({
            grant_requests: result
          })
        })
    }, 100)

  }

  componentDidMount() {
    setTimeout(() => {
      APIManager.getAll(`grants?by_wish=id`)
        .then((result) => {
          this.setState({
            grant_requests: result
          })
        })
    }, 100)

  }

  render() {
    return (
      <>
        <h1>Received Grant Requests</h1>


        <Paper>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                <TableCell>Memo</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.grant_requests.map((grants) =>
                <StatusGrantItem
                  key={grants.id}
                  grants={grants}
                  rerenderer={this.rerenderer}
                  {...this.props}
                />
              )}
            </TableBody>
          </Table>
        </Paper>

        {/* 
         {this.state.grant_requests.map((grants) => 
        <StatusGrantItem
         key={grants.id} 
         grants={grants}
         rerenderer ={this.rerenderer}
        {...this.props}
        />)}   */}

      </>
    )
  }
}

export default StatusGrant
