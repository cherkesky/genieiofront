import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import InboxItem from './InboxItem'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';


export class Inbox extends Component {
  state = {
    my_grants: []
  }

  componentDidMount() {
    APIManager.getAll("grants?by_wish=id")
      .then((result) => {
        this.setState({
          my_grants: result
        })
      });
  } // closer componentDidMount

  render() {
    return (
      <>
        <h1>Inbox</h1>

        <Paper>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.my_grants.map((grants) =>
                <InboxItem
                  key={grants.id}
                  grants={grants}
                  {...this.props}
                />)}
            </TableBody>
          </Table>
        </Paper>

      </>
    )
  }
}

export default Inbox
