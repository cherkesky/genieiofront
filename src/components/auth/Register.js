import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Register extends Component {

    state = {
        email: "",
        userName: "",
        firstName: "",
        lastName: "",
        cid: "",
        password: "",
        verifyPassword: ""
    }

    handleFieldChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = event => {
        event.preventDefault()

        // Creates object with values from state
        const newUser = {
            "username": this.state.userName,
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "cid": this.state.cid,
            "email": this.state.email,
            "password": this.state.password
        }

        // Makes a fetch call with newUser object as the body of the POST request
        this.props.registerUser(newUser)
            .then((response) => console.log("res in reg", response))
            .then(() => this.props.history.push("/home"))
    }

    render() {
        return (
            <form className="form--login" onSubmit={this.handleRegister}>
                <h1>Create Account</h1>
                {/* <fieldset>
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        id="userName"
                        type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset> */}
                <TextField required
                    id="userName"
                    label="Username"
                    type="text"
                    onChange={this.handleFieldChange}
                /><br />

                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset> */}
                <TextField required
                    id="firstName"
                    label="First Name"
                    type="text"
                    onChange={this.handleFieldChange}
                /><br />
                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="lastName"
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset> */}
                <TextField required
                    id="lastName"
                    label="Last Name"
                    type="text"
                    onChange={this.handleFieldChange}
                /><br />
                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="cid"
                        type="text"
                        name="cid"
                        className="form-control"
                        placeholder="Phone"
                        required />
                </fieldset> */}
                <TextField required
                    id="cid"
                    label="Phone Number"
                    type="text"
                    onChange={this.handleFieldChange}
                /><br />

                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset> */}
                <TextField required
                    id="email"
                    label="Email"
                    type="email"
                    onChange={this.handleFieldChange}
                /><br />
                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset> */}
                <TextField required
                    id="password"
                    label="Password"
                    type="password"
                    onChange={this.handleFieldChange}
                /><br />
                {/* <fieldset>
                    <input onChange={this.handleInputChange}
                        id="verifyPassword"
                        type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset> */}
                <TextField required
                    id="verifyPassword"
                    label="Password Again"
                    type="password"
                    onChange={this.handleFieldChange}
                /><br /><br />
                {/* <fieldset>
                    <button type="submit">
                            Register
                    </button>
                </fieldset> */}

                <Button variant="contained" color="secondary" onClick={
                    this.handleRegister
                }>
                    Register
                  </Button>
            </form>
        )
    }
}

export default Register