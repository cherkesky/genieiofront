import React, { Component } from 'react'
import NavBar from './nav/Navbar'
import ApplicationViews from '../ApplicationViews'

export class GenieIO extends Component {

  state = {
    user: false,
    search: "",
    searchResults: []
    
  }

  isAuthenticated = () => {
    return sessionStorage.getItem("genieio_token") !== null
  }

  registerUser = (userInfo) => {
    //creates user, saves user token to sessionStorage, and sets state of user to True
    return fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(res => {
        if ("token" in res) {
          sessionStorage.setItem("genieio_token", res.token)
        }
      })
      .then(() => this.setState({
        user: this.isAuthenticated()
      }))
  }

  loginUser = (credentials) => {
    //logs in user, saves user token to sessionStorage, and sets state of user to True
    return fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          sessionStorage.setItem("genieio_token", res.token)
        }
        else window.alert('Incorrect username or password. Please try again.')
      })
      .then(() => this.setState({
        user: this.isAuthenticated()
      }))
  }

  logoutUser = () => {
    //clears user from localStorage and redirects to home page
    this.props.clearUser();
    this.props.history.push('/');
  }
  render() {
    return (
      <>
          <NavBar
          isAuthenticated={this.isAuthenticated} 
          />
          <ApplicationViews
          isAuthenticated={this.isAuthenticated}
          registerUser={this.registerUser}
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
          />
      </>
    )
  }
}

export default GenieIO
