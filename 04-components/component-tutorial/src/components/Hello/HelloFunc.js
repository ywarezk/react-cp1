/**
 * I can create a component with a function
 * 
 * 
 */

import React, {useState} from 'react';

/**
 * 
 * @param { name: '. ..' } props 
 */
export default function Hello(props) {
    // [isVisible, setIsVisible]
    const stateArray = useState(true);
    const isVisible = stateArray[0];
    const setIsVisbile = stateArray[1];

    const [message, setMessage] = useState('message');

    const [restOfState, setRestOfState] = useState({
        myArray: [1,2,3],
        myObj: {
            name: 'yariv'
        }
    })
    
    const toggleText = function() {
        // alert(`hello ${props.name}`)

        setIsVisbile(!isVisible);
    }

    return (
        <div>
            {
                isVisible && (
                    <h1>
                        <u>hello world {props.name}</u>
                    </h1>
                )
            }
            <button onClick={toggleText}>
                toggle text
            </button>
        </div>
    )
}