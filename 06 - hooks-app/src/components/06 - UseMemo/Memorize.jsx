import React from 'react';
import { useState } from 'react';

import { useCounter } from '../../hooks';

import { Small } from './';

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    return ( 
        <div className='container text-center'>
            <h1>Counter: <Small counter={ counter }/></h1>

            <hr />

            <button onClick={ () => increment() } className='btn btn-primary btn-lg'>+1</button>
            <button onClick={ () => setShow(!show) } className='btn btn-outline-primary btn-lg'>Show / Hide { JSON.stringify(show) }</button>
        </div>
    )
}; 

export default Memorize;
