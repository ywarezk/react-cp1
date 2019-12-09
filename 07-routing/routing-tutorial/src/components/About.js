import React from 'react';
import {useLocation} from 'react-router-dom';

export default () => {
    const location = useLocation()

    return (
        <h1>About page {location.state.token}</h1>
    );
}