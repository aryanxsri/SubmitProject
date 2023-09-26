import React, { useState } from 'react';
import Navbar from './Navbar';
import './todolist.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    };

    return (
        <>
        <Navbar/>
        <div className='TodoList'>
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder="Add a task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button  onClick={() => handleComplete(index)}>  Complete   </button>
                        <button onClick={() => handleDelete(index)}>  Delete   </button>
                    </li>
                ))}
            </ul>
        </div></>
        
    );
}

export default TodoList;
