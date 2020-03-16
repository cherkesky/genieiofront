import React, { Component } from 'react'

export class SearchResults extends Component {
  render() {
    return (
      <>
      <p>{this.props.wishes.wish_body} - {this.props.wishes.created_at}</p>
      
      </>
    )
  }
}

export default SearchResults
