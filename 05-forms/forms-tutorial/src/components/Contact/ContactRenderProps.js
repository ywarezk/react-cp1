/**
 * contact form with email, message
 */

import React from 'react';
import noop from '../../hoc/noop.hoc';
import forms from '../../hoc/forms.hoc';
import Noop from '../../renderprops/noop.renderprops';
import SuperForm from '../../renderprops/forms.renderprops';

 export default class Contact extends React.Component {
    // state = {
    //     email: '',
    //     message: ''
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.currentTarget.value
    //     })
    // }

    handleContact = (event) => {
        event.preventDefault();
        console.log(`${this.props.values.email} ${this.props.values.message}`);
    }

     render() {
        return (<SuperForm initialValues={ {email: 'yariv@nerdeez.com', message: 'hello!'} } > {
            (handleChange, values) => {
                return (
                    <form noValidate onSubmit={this.handleContact}>                
                        <h1>{this.props.title}</h1>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                onChange={handleChange}
                                value={values.email}
                                className="form-control" 
                                name="email" 
                                type="email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea 
                                onChange={handleChange}
                                value={values.message}
                                name="message" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                 );
            }
        } </SuperForm>);

         
     }
 }

//  export default noop(Contact);

// {email: '', message }
// export default forms({email: 'yariv@nerdeez.com', message: '12345'})(Contact);

// {email, password}
// export default forms(Login);