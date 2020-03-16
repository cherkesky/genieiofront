import React, { Component } from 'react'

export class SearchResults extends Component {
  render() {
    return (
      <>
      <h3>Search Results</h3>
      <p onClick={()=>{
        this.props.chooseGrant(this.props.wishes.id)
        }}>
        
        {this.props.wishes.wish_body} - {this.props.wishes.created_at}</p>
      
      </>
    )
  }
}

export default SearchResults
