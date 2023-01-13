import React from 'react';

import { useState, useEffect } from 'react';

const State = () => {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setInterval(() => {
            setState(state + 1);
        }, 3000);
    };

    return (
        <div className='container text-center'>
            <h1>State</h1>
            <hr />

            <p>Count: { state }</p>
            <button className='btn btn-secondary' onClick={ handleClick }>Set State</button>
        </div>
    )
};

export default State;
