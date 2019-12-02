/**
 * login form
 * binding - grab what the user typed
 * uncontrolled
 * - createRef
 * - attach it to input via ref prop
 * - during submit grabbing the value from input
 */

import React, {createRef} from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.emailRef = createRef();
        this.passwordRef = createRef();
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log(`email: ${this.emailRef.current.value}, password: ${this.passwordRef.current.value}`);
    }

    render() {
        return (
            <form noValidate onSubmit={this.handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input ref={this.emailRef} className="form-control" name="email" type="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input ref={this.passwordRef} className="form-control" name="password" type="password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }
}