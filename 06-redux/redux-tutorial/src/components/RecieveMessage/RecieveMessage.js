import React from 'react';
import { connect } from 'react-redux';

const RecieveMessage = ({messageFromRedux}) => {
    return (
        <h1>{messageFromRedux}</h1>
    )
}

/*function() {
    return function() {
        return class . . . React.Component { ... }
    }
}*/

export default connect(
    /**
     * 
     * @param {any} state the state from the store => store.getState()
     */
    function(state) {
        return {
            messageFromRedux: state.hello.message
        }
    }
)(RecieveMessage);