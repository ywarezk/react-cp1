

import React, {useRef} from 'react';

export default () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(`email: ${emailRef.current.value}, password: ${passwordRef.current.value}`);
    }

    return (
        <form noValidate onSubmit={handleLogin}>
            <div className="form-group">
                <label>Email</label>
                <input ref={emailRef} className="form-control" name="email" type="email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input ref={passwordRef} className="form-control" name="password" type="password" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}