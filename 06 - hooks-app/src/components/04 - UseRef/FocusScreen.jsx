import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div className='container text-center'>
            <h1>Focus Screen</h1>

            <hr /> 

            <input ref={ inputRef } type='text' className='form-control' placeholder='Your name' />

            <button className='btn btn-primary btn-lg mt-3' onClick={ handleClick }>Set Focus</button>
        </div>
    )
};

export default FocusScreen;
