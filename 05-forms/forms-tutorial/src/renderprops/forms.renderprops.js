/**
 * <SuperFormRenderProps render={() => ...}> {() => how the son should look}  </SuperFormRenderProps>
 */

import React from 'react';

export default class SuperFormRenderProps extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.initialValues;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.currentTarget.value
        })
    }

    render() {
        return this.props.children(this.handleChange, this.state);
    }
}