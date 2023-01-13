import React from 'react';

import { useCounter } from '../../hooks/useCounter';

export const CounterCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <div className='container text-center'>
            <h1>Counter With Custom Hook: { counter }</h1>

            <hr/>

            <button className='btn btn-primary btn-lg' onClick={ () => increment(2) }>Up</button>
            <button className='btn btn-primary btn-lg' onClick={ reset }>Reset</button>
            <button className='btn btn-primary btn-lg' onClick={ () => decrement(2) }>Down</button>
        </div> 
    )
};

export default CounterCustomHooks;
