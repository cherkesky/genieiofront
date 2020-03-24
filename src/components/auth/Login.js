
import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleFieldChange = (evt) => {
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
            .then(() => {
                if (this.props.isAuthenticated()){
                    this.props.history.push("/home")
                }
    })}

    render() {
        return (
            <>
                <form className="form--login"
                    onSubmit={this.handleLogin}
                    style={styles.parent}
                >
                    <h1>Login</h1>
                    {/* <fieldset>
                        <input onChange={(evt) => this.handleInputChange(evt)}
                            id="username"
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset> */}
                    <TextField required
                        id="username"
                        label="username"
                        type="text required"
                        onChange={this.handleFieldChange}
                    /><br />

                    <TextField required
                        id="password"
                        label="password"
                        type="password required"
                        onChange={this.handleFieldChange}
                    /><br />

                    <Button variant="contained" color="secondary" style={styles.loginbutton} onClick={
                        this.handleLogin
                    }>
                        Login
                  </Button>

                    {/* <fieldset>
                        <input onChange={this.handleInputChange}
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset> */}

                    {/* <fieldset>
                        <button type="submit">
                            Login
                    </button>
                    </fieldset> */}

                </form>
            </>
        )
    }
}

export default Login