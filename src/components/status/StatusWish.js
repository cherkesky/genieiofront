import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export class StatusWish extends Component {
  render() {
    return (
      <>
        <TableRow 
        key={this.props.wishes.id}
        hover={true}
        >
          <TableCell component="th" scope="row">
            {this.props.wishes.id}
          </TableCell>
          <TableCell align="center">{this.props.wishes.wish_body}</TableCell>
          <TableCell align="center">{(this.props.wishes.created_at).substring(0, 10)}</TableCell>

        </TableRow>
      </>
    )
  }
}

export default StatusWish
