/**
 * login form
 * binding - grab what the user typed
 * uncontrolled
 * - createRef
 * - attach it to input via ref prop
 * - during submit grabbing the value from input
 */

import React from 'react';

export default class Login extends React.Component {
    state = {
        email: 'yariv@nerdeez.com',
        password: ''
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log(`email: ${this.state.email}, password: ${this.state.password}`);
    }

    handleChange = (passwordOremail, event) => {
        this.setState({
            [passwordOremail]: event.currentTarget.value
        })
    }

    handleChange2 = (event) => {
        this.setState({
            [event.target.name]: event.currentTarget.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.currentTarget.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.currentTarget.value
        })
    }

    render() {
        return (
            <form noValidate onSubmit={this.handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        value={this.state.email}  
                        onChange={(event) => this.handleChange('email', event)}
                        className="form-control" 
                        name="email" 
                        type="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={this.state.password} 
                        onChange={this.handleChange2}
                        className="form-control" name="password" type="password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }
}