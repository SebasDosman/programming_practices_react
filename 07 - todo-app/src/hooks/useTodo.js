import { useReducer, useEffect } from 'react';

import { todoReducer } from '../components';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialSate;
};

export const useTodo = (initialState = []) => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo 
        };

        dispatch(action);
    };

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todoId
        };

        dispatch(action);
    };

    const handleToggleTodo = (todoId) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todoId
        };

        dispatch(action);
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: (todos.filter(todo => !todo.done)).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
};