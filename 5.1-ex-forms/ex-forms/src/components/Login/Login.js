/**
 * login form
 */

import React, {useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import JwtContext from '../../contexts/jwt-context';
import jwtService from '../../services/jwt.service';

const loginSchema = yup.object().shape({
    email: yup.string().required('this field is required').email('bad email format'),
    password: yup.string().required('this field is required').min(5, 'more characters please!')
});

const Login = () => {
    // const {setToken} = useContext(JwtContext);

    const handleLogin = (values) => {
        console.log(values);

        fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then((tokenObj) => {
                jwtService.jwt$.next(tokenObj.token);
                // setToken(tokenObj.token);
            })
    }

    return (
        <Formik
            initialValues={ {email: '', password: '12345' } }
            onSubmit={ handleLogin }
            validationSchema={ loginSchema }
        >
            <Form>
                <div className="form-group">
                    <label>Email</label>
                    <Field placeholder="Email Please..." className="form-control" name="email" />
                    <ErrorMessage name="email" component="div" className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field className="form-control" name="password" />
                    <ErrorMessage name="password" component="div" className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </Form>
        </Formik>
    )
}

// Login.propTypes = {
//     cb: PropTypes.func.isRequired
// }

export default Login;