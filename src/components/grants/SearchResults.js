import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export class SearchResults extends Component {
  render() {
    return (
      <>

        <TableRow
          key={this.props.wishes.id}
          hover={true}
          align="center">

          <TableCell
            component="th"
            scope="row"
            onClick={() => {
              this.props.chooseGrant(this.props.wishes.id)
            }}
          >{this.props.wishes.wish_body}</TableCell>

          <TableCell
            align="center"
            onClick={() => {
              this.props.chooseGrant(this.props.wishes.id)
            }}
          > {this.props.wishes.created_at}
          </TableCell>

          {/* <p onClick={()=>{
        this.props.chooseGrant(this.props.wishes.id)
        }}>
        
        {this.props.wishes.wish_body} - {this.props.wishes.created_at}</p> */}
        </TableRow>

      </>
    )
  }
}

export default SearchResults
