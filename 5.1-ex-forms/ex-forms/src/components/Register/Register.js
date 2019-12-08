/**
 * login form
 */

import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const registerSchema = yup.object().shape({
    email: yup.string().required('this field is required').email('bad email format'),
    password: yup.string().required('this field is required').min(5, 'more characters please!'),
    firstName: yup.string().required('this field is required'),
    lastName: yup.string().required('this field is required'),
});

const Register =  ({cb}) => {
    const handleRegister = (values) => {
        console.log(values);

        fetch('https://academeez-login-ex.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then((tokenObj) => {
                cb(tokenObj.token)
            })
    }

    return (
        <Formik
            initialValues={ {email: '', password: '12345', firstName: 'Yariv', lastName: 'Katz' } }
            onSubmit={ handleRegister }
            validationSchema={ registerSchema }
        >
            <Form>
                <div className="form-group">
                    <label>First Name</label>
                    <Field placeholder="First Name" className="form-control" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <Field placeholder="Last Name" className="form-control" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className="alert alert-danger" />
                </div>
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

Register.propTypes = {
    cb: PropTypes.func.isRequired
}

export default Register;