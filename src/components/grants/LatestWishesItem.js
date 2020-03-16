import React, { Component } from 'react'

export class LatestWishesItem extends Component {
  render() {
    return (
      <>
        <p onClick={()=>{
          this.props.chooseGrant(this.props.wishes.id)
        }}
        >
          {this.props.wishes.wish_body}  - {this.props.wishes.created_at}
        </p>

      </>
    )
  }
}

export default LatestWishesItem
