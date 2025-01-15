import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ task, priority }));
            setTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task..."
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
