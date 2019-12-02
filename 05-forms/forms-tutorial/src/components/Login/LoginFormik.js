import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().email('invalid email').required('this field is required'),
    password: yup.string().required('required').min(3, 'more please')
})

export default () => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: '12345'} }
            onSubmit={handleLogin}
            validationSchema={schema}
        >
            <Form>
                <div className="form-group">
                    <label>Email</label>
                    <Field className="form-control" name="email" type="email" />
                    <ErrorMessage component="div" name="email" className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field className="form-control" name="password" type="password" />
                    <ErrorMessage component="div" name="password" className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </Form>
        </Formik>
    )

}