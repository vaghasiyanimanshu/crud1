import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Insert = () => {
    var name = useRef();
    var email = useRef();
    var password = useRef();

    const nav = useNavigate();


    const handle = (e) => {
        e.preventDefault();

        const save = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        };

        axios.post('https://69317ff811a8738467cf24f1.mockapi.io/rita', save)
            .then((response) => {
                console.log(response.data);
                e.target.reset();   // ✅ clears all inputs in ONE line
                nav("/");
            });
    };
    return (
        <div className="insert-container">
            <h2 className="insert-title">Insert User</h2>
            <form onSubmit={handle} className="insert-card">
                <div className="insert-group">
                    <label>Name:</label>
                    <input type="text" ref={name} placeholder="Enter name" required />
                </div>
                <div className="insert-group">
                    <label>Email:</label>
                    <input type="email" ref={email} placeholder="Enter email" required />
                </div>
                <div className="insert-group">
                    <label>Password:</label>
                    <input type="password" ref={password} placeholder="Enter password" required />
                </div>
                <div className="insert-actions">
                    <button type="submit" className="btn btn-primary">Add User</button>
                    <button type="reset" className="btn btn-secondary">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Insert
