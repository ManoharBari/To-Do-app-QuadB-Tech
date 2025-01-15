import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions/taskActions';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <p>
                        {task.task} - {task.priority}
                    </p>
                    <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
