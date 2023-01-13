import React from 'react';

import Message from './Message';

import { useForm } from '../../hooks/useForm';

export const FormCustomHook = () => { 
    const { formState, handleInputChange, username, email, password, reset } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <div className='container text-center'>
            <h1>Simple Form With Custom Hook</h1>

            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='username'
                    className='form-control'
                    placeholder='Username'
                    value={ username }
                    onChange={ handleInputChange }
                />

                <input
                    type='email'
                    name='email'
                    className='form-control mt-2'
                    placeholder='Email'
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type='password'
                    name='password'
                    className='form-control mt-2'
                    placeholder='Password'
                    value={ password }
                    onChange={ handleInputChange }
                />

                { (username === 'SebasDosman') && <Message /> }
            
                <button className='btn btn-primary btn-lg mt-4' onClick={ reset }>Reset</button>
            </div>
        </div>
    )
};

export default FormCustomHook;
