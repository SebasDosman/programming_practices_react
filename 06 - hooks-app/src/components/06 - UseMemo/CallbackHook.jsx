import React from 'react';
import { useState, useCallback } from 'react';

import { ShowIncrement } from './';

export const CallbackHook = () => {
    const [ counter, setCounter ] = useState(10);
    
    const increment = useCallback((value) => {
        setCounter((counter) => counter + value);
    }, [ ]);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <div className='container text-center'>
            <h1>CallbackHook: { counter }</h1>

            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
};

export default CallbackHook;
