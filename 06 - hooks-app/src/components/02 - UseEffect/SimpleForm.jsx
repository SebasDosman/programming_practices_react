import React from 'react';
import { useState, useEffect } from 'react';

import Message from './Message';

export const SimpleForm = () => { 
    const [formState, setFormState] = useState({
        username: 'SebasDosman',
        email: 'jsdosman0@gmail.com'
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    useEffect(() => {
        // console.log('UseEffect');
    }, [ ]);

    useEffect(() => {
        // console.log('Form state changed');   
    }, [ formState ]);

    useEffect(() => {
        // console.log('Email changed');   
    }, [ email ]);

    useEffect(() => {
        // console.log('Username changed');   
    }, [ username ]);

    return (
        <div className='container text-center'>
            <h1>Simple Form</h1>

            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='username'
                    className='form-control'
                    placeholder='User name'
                    value={ username }
                    onChange={ handleInputChange }
                />

                <input
                    type='email'
                    name='email'
                    className='form-control mt-2'
                    placeholder='name@example.com'
                    value={ email }
                    onChange={ handleInputChange }
                />

                { (username === 'SebasDosman') && <Message /> }
            </div>
        </div>
    )
};

export default SimpleForm;
