import React from 'react';
import { useHistory, useLocation } from "react-router-dom";


export default () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/about', {token: 'hello'});
    }

    return (
        <>
            <h1>Home page</h1>
            <button onClick={handleClick}>Navigate to about</button>
        </>
    );
}