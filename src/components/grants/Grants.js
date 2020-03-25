import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import LatestWishes from './LatestWishes'
import SearchResults from './SearchResults'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const styles = {
  parent: {
    marginTop: "auto",
    background: "lightgray",
    display: "flex",
    flexDirection: "column",
  },

  button: {
    marginTop: "auto",
    display: 'flex',
    background: "#DC42CC",
    flexDirection: 'column',
    justifyContent: 'baseline',
    padding: 30,
    height: 30
  }
}



export class Grants extends Component {

  state = {
    search: "",
    searchResults: [],
    chosenGrant: 0,
    lastBTN: "None"

  }

  chooseGrant = (id) => {
    this.setState({
      chosenGrant: id
    })

  }

  grantWish = (id) => {
    console.log("Grant wish #", this.state.chosenGrant)
    this.props.history.push({
      pathname: "/grantmemo",
      state: {
        chosenGrant: this.state.chosenGrant
      }
    })
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

  componentDidMount() {
    if ((this.props.location.search) !== undefined) {

      APIManager.getAll(`wishes?search=${this.props.location.search.split("=")[1]}`)
        .then((res) => {
          this.setState({ searchResults: res })
        })
    }
  }


  render() {
    const isEnabled = this.state.chosenGrant !== 0
    

    return (
      <>
        <h1>Grants</h1>
        <Paper> 
        <TextField id="search" label=" Search for wishes to grant..."
          style={{ background: "#FFFFFF" }}
          fullWidth
          type="search"
          onChange={(evt) => this.handleInputChange(evt)} />
        </Paper>



        {/* if search state empty show <LatestWishes/> if not show <SearchResult/> */}
        {this.state.searchResults.length >= 1
          ?
          <Paper>
            <Table stickyHeader={true}>
              <TableHead>
                <TableRow>
                  <TableCell>Wish</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.searchResults.map((searchResults) =>
                  <SearchResults
                    key={searchResults.id}
                    wishes={searchResults}
                    chooseGrant={this.chooseGrant}
                    {...this.props} />)}
              </TableBody>
            </Table>
          </Paper>


          : <LatestWishes
            chooseGrant={this.chooseGrant}
            {...this.props} />
        }

        <Button variant="contained"
          color="secondary"
          style={styles.button}
          disabled={!isEnabled}
          onClick={() => {
            this.grantWish(this.state.chosenGrant)
          }}>Grant</Button>

      </>
    )
  }
}

export default Grants