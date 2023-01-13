import React from 'react';
import { useState, useMemo } from 'react';

import { useCounter } from '../../hooks';

const heavyStuff = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Heavy Stuff');
    }

    return `${ iterations } iterations done`;
};

export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);
    const heavyStuffMemo = useMemo(() => heavyStuff(counter), [counter]);

    return ( 
        <div className='container text-center'>
            <h1>Counter: <small>{ counter }</small></h1>

            <hr />

            <p>{ heavyStuffMemo }</p>

            <button onClick={ () => increment() } className='btn btn-primary btn-lg'>+1</button>
            <button onClick={ () => setShow(!show) } className='btn btn-outline-primary btn-lg'>Show / Hide { JSON.stringify(show) }</button>
        </div>
    )
}; 

export default MemoHook;
