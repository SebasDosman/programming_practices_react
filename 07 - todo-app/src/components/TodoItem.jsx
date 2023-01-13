import React from 'react';

import PropTypes from 'prop-types';

export const TodoItem = ({ id, done, description, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            { done 
                ?   <span onClick={ () => onToggleTodo(id) } className='align-self-center text-decoration-line-through'>✔ { description }</span>
                :   <span onClick={ () => onToggleTodo(id) } className='align-self-center'>❌ { description }</span>
            }
            <button onClick={ () => onDeleteTodo(id) } className='btn btn-danger'>Delete</button>
        </li>
    )
};

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
};

export default TodoItem;
