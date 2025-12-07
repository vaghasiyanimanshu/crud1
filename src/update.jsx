import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    var name = useRef();
    var email = useRef();
    var password = useRef();

    const nav = useNavigate();
    var { id } = useParams();

    useEffect(() => {
        var update = new FormData();
        update.set("id", id)

        axios.get(`https://69317ff811a8738467cf24f1.mockapi.io/rita/${id}`)
            .then(function (response) {
                name.current.value = response.data.name
                email.current.value = response.data.email
                password.current.value = response.data.password
            }, [])
    }, [id])

    const handleupdate = (e) => {
        e.preventDefault();

        axios.put(`https://69317ff811a8738467cf24f1.mockapi.io/rita/${id}`, {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        })
            .then(() => {
                // alert("Update Success");
                nav("/view");
            });
    };

    return (
        <>
            <form onSubmit={handleupdate} className="update-form-container">

                <h2 className="update-title">Update Account</h2>

                <div className="update-field">
                    <label>Name</label>
                    <input type="text" ref={name} placeholder="Enter your name" required />
                </div>

                <div className="update-field">
                    <label>Email</label>
                    <input type="email" ref={email} placeholder="Enter your email" required />
                </div>

                <div className="update-field">
                    <label>Password</label>
                    <input type="password" ref={password} placeholder="Enter your password" required />
                </div>

                <button type="submit" className="update-submit-btn">
                    Save Changes
                </button>

            </form>


        </>
    )
}

export default Update
