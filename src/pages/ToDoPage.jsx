import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/actions/weatherActions";

const ToDoPage = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather || { loading: false, error: null, data: null });

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);

        if (!localStorage.getItem("username")) {
            navigate("/login");
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Fetch weather using user's current location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(fetchWeather({ latitude, longitude }));
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    dispatch(fetchWeather("New York"));
                }
            );
        } else {
            console.error("Geolocation not supported by this browser.");
            dispatch(fetchWeather("New York"));
        }
    }, [dispatch]);

    const addTask = () => {
        if (task.trim()) {
            setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>To-Do List</h1>
            <h3>{weather.data.name}</h3>
            <p>Temperature: {weather.data.main.temp}°C</p>


            {/* To-Do Section */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: "8px", marginRight: "10px", width: "250px" }}
                />
                <button onClick={addTask} style={{ padding: "8px 16px" }}>
                    Add Task
                </button>
            </div>
            <ul style={{ listStyleType: "none", padding: "0" }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            padding: "10px",
                            border: "1px solid #ddd",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>{task.text}</span>
                        <button onClick={() => deleteTask(index)} style={{ padding: "5px 10px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoPage;
