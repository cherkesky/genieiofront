import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import LatestWishes from './LatestWishes'
import SearchResults from './SearchResults'
export class Grants extends Component {

  state = {
    search: "",
    searchResults: []

  }

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    // get from the API
    if (this.state.search !== "" && this.state.search.length >= 3) { // go search only in the user enetered more than 3 search letters
      APIManager.getAll(`wishes?search=${this.state.search}`)
        .then((res) => {
          this.setState({ searchResults: res })
        })
    } else {
      this.setState({ searchResults: [] }) // or else clear the search results
    }
  }

  render() {
    return (
      <>
        <h1>Grants</h1>
        <input type="text" id="search" placeholder="Search for wishes to grant..." onChange={(evt) => this.handleInputChange(evt)}></input>

        {/* if search state empty show <LatestWishes/> if not show <SearchResult/> */}
        {this.state.searchResults.length >= 1
          ?
          this.state.searchResults.map((searchResults) =>
            <SearchResults
              key={searchResults.id}
              wishes={searchResults}
              {...this.props} />)

          : <LatestWishes {...this.props} />
        }
      </>
    )
  }
}

export default Grants