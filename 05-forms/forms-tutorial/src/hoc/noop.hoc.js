/**
 * noop(Contact) => SuperContact
 */

import React from 'react';

 export default function noop(Form) {
    
    return class SuperNoop extends React.Component {
        render() {
            return (
                <Form {...this.props} />
            )
        }
    }

 }