import React from 'react';

import { useCounter, useFetch } from '../../hooks';

import { Blockquote, Loading } from './';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    const { data, loading } = useFetch(`https://api.quotable.io/quotes?page=${ counter }`);
    const { results } = !!data && data;
    const { _id, author, content } = !!results && results[0];

    return (
        <div className='container text-center'>
            <h1>Random Quotes</h1>

            <hr />

            { 
                loading 
                ? <Loading /> 
                : <Blockquote key={ _id } author={ author } content={ content }/>
            }  

            <button onClick={ () => increment() } disabled={ loading } className='btn btn-primary btn-lg'>Next Quote</button>
        </div>
    )
};

export default MultipleCustomHooks;
