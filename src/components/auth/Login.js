
import React, { Component } from "react"

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = event => {
        event.preventDefault()

        const credentials = {
            "username": this.state.username,
            "password": this.state.password
        }

        this.props.loginUser(credentials)
            .then(() => this.props.history.push("/home"))
    }

    render() {
        return (
            <>
                <form className="form--login" onSubmit={this.handleLogin}>
                    <h1>Login</h1>
                    <fieldset>
                        <input onChange={(evt) => this.handleInputChange(evt)}
                            id="username"
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input onChange={this.handleInputChange}
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Login
                    </button>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default Login