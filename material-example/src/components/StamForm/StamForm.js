import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Formik, Field, Form} from 'formik';
import Button from '@material-ui/core/Button';

export default () => {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={ {stam: 'hello'} }
        >
            <Form>
                <Field name="stam" render={(values) => 
                    <TextField {...values} id="standard-basic" label="Standard" />} />
                <Button variant="contained" color="primary">
                    send
                </Button>
            </Form>
            

            
        </Formik>
        
    );
}