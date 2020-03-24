import React, { Component } from 'react'
import StatusGrant from './StatusGrant'
import APIManager from '../../modules/APIManager';
import StatusWish from './StatusWish'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';


export class Status extends Component {
  state = {
    my_wishes: []
  }

  componentDidMount() {
    APIManager.getAll("wishes?my_wishes=id")
      .then((result) => {
        this.setState({
          my_wishes: result
        })
      });
  } // closer componentDidMount



  render() {
    return (
      <>
        <h1>My Wishes</h1>

        <Paper >
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                <TableCell>Wish ID</TableCell>
                <TableCell align="center">Wish</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.my_wishes.map((wishes) =>
              <StatusWish
                key={wishes.id}
                wishes={wishes}
                {...this.props}
              />
            )}
            </TableBody>
          </Table>
        </Paper>


        <StatusGrant
          wishes={this.state.my_wishes}
        />
      </>
    )
  }
}

export default Status
