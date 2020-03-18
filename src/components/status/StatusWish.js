import React, { Component } from 'react'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

export class StatusWish extends Component {
  render() {
    return (
      <div>
        <p>#{this.props.wishes.id} - {this.props.wishes.wish_body}</p>
      </div>
    )
  }
}

export default StatusWish
