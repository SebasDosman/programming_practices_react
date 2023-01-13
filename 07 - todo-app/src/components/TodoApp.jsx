import { React } from 'react';

import { TodoAdd, TodoList } from './';

import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <div className='container text-center'>
            <h1>TodoApp</h1>

            <div >
                <small>Todos: { todosCount }</small>
                <br />
                <small>Pending: { pendingTodosCount }</small>
            </div>

            <hr />

            <div className='row text-center' style={{ gap: "1rem" }}>
                <div className='col card'>
                    <div className='mt-2 mb-2'>
                        <h4>Todo List</h4>

                        <hr />

                        <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>
                    </div>
                </div>

                <div className='col card'>
                    <div className='mt-2 mb-2'>
                        <h4>Add todo</h4>

                        <hr />

                        <TodoAdd onNewTodo={ handleNewTodo } />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TodoApp;