import React from 'react';
import { Formik, Form, Field} from 'formik';
import {setMessage} from '../../redux/actions/hello.actions';
import {connect} from 'react-redux';

const SendMessage = ({setMessageWithDispatch, yariv}) => {

    const handleSubmit = (values) => {
        console.log(values);
        // ... setMessage()
        setMessageWithDispatch(values.message);
    }

    return (
        <Formik
            initialValues={ {message: ''} }
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="form-group">
                    <label>Send Message</label>
                    <Field type="text" name="message" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Send</button>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    function(state) {
        return {
            yariv: state.yariv
        }
    },
    function(dispatch) {
        return {
            setMessageWithDispatch: (newMessage) => dispatch(setMessage(newMessage))   
        }
    }
    /*{
        setMessageWithDispatch : setMessage
    }*/
)(SendMessage);