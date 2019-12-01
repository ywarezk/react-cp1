/**
 * countdown until zero and remove the component
 */

 import React from 'react';

 export default class Countdown extends React.Component {
    
    constructor(props) {
        super(props);

        // TODO
        // anti pattern
        // what will happen if the parent send a different prop.start?
        this.state = {
            count : props.start
        }


    }

    componentDidMount() {
        
        this.intervalId = setInterval(() => {
            
            this.setState((prevState) => {
                return {
                    count: prevState.count - 1
                }
            })

        }, 1000)

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count === 0) {
            this.props.destroyCb(false);
        }

        if (prevProps.start !== this.props.start) {
            this.setState({
                count: this.props.start
            })
        }
        
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

     render() {
         return (
             <h1>
                 {this.state.count}
             </h1>
         )
     }
 }