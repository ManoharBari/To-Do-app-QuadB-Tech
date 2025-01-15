import React from 'react';
import TaskInput from '../components/Taskinput';
import TaskList from '../components/Tasklist';

const ToDoPage = () => {
    return (
        <div>
            <h2>To-Do List</h2>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default ToDoPage;
