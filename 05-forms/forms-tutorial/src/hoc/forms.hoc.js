/**
 * hoc(Component)
 * hoc(configs)(Component)
 */

import React from 'react';

 export default function forms(initialState) {

    return function(Form) {

        return class SuperForm extends React.Component {
            
            constructor(props) {
                super(props);

                this.state = initialState;
            }

            handleChange = (event) => {
                this.setState({
                    [event.target.name]: event.currentTarget.value
                })
            }

            // onSubmit = (event) => {
            //     event.preventDefault();

            // }

            render() {
                return (
                    <Form values={this.state} changeCb={this.handleChange} {...this.props} />
                )
            }
        }

    }

    
 }