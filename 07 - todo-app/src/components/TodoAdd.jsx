import React from 'react';

import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, handleInputChange, resetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        };

        onNewTodo(newTodo);

        resetForm();
    };

    return (
        <form onSubmit={ onFormSubmit }>
            <input onChange={ handleInputChange } name='description' value={ description } type='text' className='form-control' placeholder='Add...'/>
            <button className='btn btn-primary mt-2 btn-lg' type='submit'>Add todo</button>
        </form>
    )
};

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
};

export default TodoAdd;
