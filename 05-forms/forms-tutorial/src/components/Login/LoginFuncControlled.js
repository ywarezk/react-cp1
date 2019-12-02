/**
 * form state in the component state
 * login form
 */

 import React from 'react';
 import useForms from '../../customhooks/forms.customhooks';

 export default () => {

    const [handleChange, formState] = useForms({
            email: 'yariv@nerdeez.com',
            password: '12345'
    });

    // const [formState, setFormState] = useState({
    //     email: 'yariv@nerdeez.com',
    //     password: '12345'
    // });

    // const handleChange = (event) => {
    //     setFormState({
    //         ...formState,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleSubmit = () => {
        console.log(`email: ${formState.email} password: ${formState.password}`);
    }

    return (
        <form noValidate onSubmit={handleLogin}>
            <div className="form-group">
                <label>Email</label>
                <input 
                    value={formState.email}  
                    onChange={handleChange}
                    className="form-control" 
                    name="email" 
                    type="email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    value={formState.password} 
                    onChange={handleChange}
                    className="form-control" name="password" type="password" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    );
 }