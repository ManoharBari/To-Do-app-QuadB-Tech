import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/actions/weatherActions";
import { useNavigate } from "react-router-dom";

const ToDoPage = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

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
                    dispatch(fetchWeather("mumbai"));
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
        // Weather Section
        <div className="container" style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
            {weather.data && (
                <div className="d-flex justify-content-between">
                    <h4>{weather.data.name}</h4>
                    <p>Temp: {weather.data.main.temp}°C</p>
                </div>
            )}

            {/* To-Do Section */}
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    placeholder="Add a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" />
                <button type="button" onClick={addTask} className="btn btn-primary">Add</button>
            </div>

            <ul style={{ listStyleType: "none", padding: "0" }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            marginTop: "20px",
                            marginBottom: "10px",
                            padding: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>{task.text}</span>
                        <button onClick={() => deleteTask(index)} type="button" className="btn btn-danger">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoPage;
