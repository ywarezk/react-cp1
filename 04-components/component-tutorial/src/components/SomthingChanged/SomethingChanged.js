/**
 * improve component performance
 */

import React from 'react';

export default class SomethingChanged extends React.PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        // for (let key of Object.keys(nextProps)) {
        //     if (this.props[key] !== nextProps[key]) {
        //         return true
        //     }
        // }
        return true
    }

    handleClick = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}>hello</h1>
        )
    }
}