import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export class InboxItem extends Component {
  render() {
    return (
      <>        
        {(this.props.grants.status==='approved')
        ?
        <TableRow
          key={this.props.grants.id}
          hover={true}
          align="center">

          <TableCell 
          component="th"
           scope="row"
           > <b> {this.props.grants.granter.user.first_name}</b> wants to grant your
           <b> {this.props.grants.wish.wish_body} </b> wish.
           now you can contact your granter at: <b> {this.props.grants.granter.cid} </b>
           </TableCell>
          </TableRow>



    




        : <h3>No messages</h3> 
       }
      </>
    )
  }
}

export default InboxItem
