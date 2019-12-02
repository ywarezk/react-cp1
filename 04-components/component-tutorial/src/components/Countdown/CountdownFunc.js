/**
 * countdown to zero and then self destruct
 */

 import React, {useState, useEffect} from 'react';

 export default ({start, destroyCb}) => {

    // anti pattern
    const [count, setCount] = useState(start);

    // componentDidMount / componentDidUpdate + componentWillUnmount
    // timer
    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log(count);
            setCount(count - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    });

    // if prop start is changing i want to update the count state
    useEffect(() => {
        setCount(start);
    }, [start]);
    // props.prevStart === props.start

    // dealing with self destruct
    useEffect(() => {
        console.log(count);
        if (count === 0) {
            destroyCb(false);
        }
        
    }, [count, count === 0, destroyCb])

    return (
        <h1>
            {count}
        </h1>
    )
 }