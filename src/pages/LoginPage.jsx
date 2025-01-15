import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authAction';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
            dispatch(login(username));
            localStorage.setItem('username', username);
            navigate('/');
        }
    };

    return (
        <div className='container mt-5 d-flex flex-column align-items-center'>
            <h2>Login</h2>
            <div class="mb-3 w-50 mt-5">
                <input type="teaxt" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="user" placeholder="Username" />
            </div>
            <div class="mb-3 w-50">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="pass" placeholder="Password" />
            </div>
            <button className="btn btn-primary w-50" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
