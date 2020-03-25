import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import LatestWishesItem from './LatestWishesItem'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';


export class LatestWishes extends Component {

  state = {
    wishes: []
  }

  componentDidMount() {
    APIManager.getAll('wishes?latest=5')
      .then((res) => {
        this.setState({ wishes: res })
      })
  }

  render() {
    return (
      <>
        <h3>Latest Wishes</h3>

        <Paper>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                <TableCell>Memo</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Date</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.wishes.map((wishes) =>
          <LatestWishesItem
            key={wishes.id}
            wishes={wishes}
            {...this.props} />)}
            </TableBody>
          </Table>
        </Paper>

        {/* {this.state.wishes.map((wishes) =>
          <LatestWishesItem
            key={wishes.id}
            wishes={wishes}
            {...this.props} />)} */}
      </>
    )
  }
}

export default LatestWishes
