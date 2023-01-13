import React from 'react';

import PropTypes from 'prop-types';

import { TodoItem } from './';

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return ( 
        <ul className='list-group'>
            {   
                todos.map(todo => (
                    <TodoItem key={ todo.id } id={ todo.id } done={ todo.done } description={ todo.description } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo }/>
                ))
            }
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
};

export default TodoList;
