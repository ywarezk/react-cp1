/**
 * component can be also a class
 */

import React from 'react';

export default class Hello extends React.Component {
    state = {
        isVisible : true,
        message: 'hello',
        myArray: [1,2,3],
        myObj: {
            name: 'yariv'
        }
    }

    // constructor(props) {
    //     super(props);

    //     // this.toggleText = this.toggleText.bind(this);
    // }

    toggleText = () => {
        // alert(`hello ${this.props.nameUser}`);

        // wrong
        // this.state.isVisible = !this.state.isVisible    

        // when new state depends on new value call this
        // wrong
        // this.setState({
        //     isVisible: !this.state.isVisible
        // });

        // call this when new state depends on prev state
        // right
        this.setState((currentState) => {
            return {
                isVisible: !currentState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.isVisible && (
                        <h1>
                            <u>hello world from class {this.props.nameUser}</u>
                        </h1>
                    )
                }
                <button onClick={this.toggleText} >
                    Toggle text
                </button>
            </div>
        )
    }
}