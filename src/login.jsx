import axios from "axios";
import React, {  useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    var email = useRef();
    var password = useRef();
    const nav = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    



    const handle = (e) => {
        e.preventDefault();

        const save = new FormData();
        save.set("email", email.current.value);
        save.set("password", password.current.value);


        axios.get("https://69317ff811a8738467cf24f1.mockapi.io/rita")
            .then((response) => {
                const user = response.data.find(
                    u =>
                        u.email === email.current.value &&
                        u.password === password.current.value
                );

                if (user) {
                    localStorage.setItem("login", "true");
                    nav("/view");
                    

                } else {
                    alert("Failed");
                }
            });
    };


    //      if (!info || info.length === 0) {
    //     return <h2>Loading...</h2>;
    //   }


    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Login</h2>

                    <form onSubmit={handle}>

                        <div className="login-group">
                            <label>Email</label>
                            <input type="email" ref={email} placeholder="Enter your email" required />
                        </div>

                        <div className="login-group">
                            <label>Password</label>
                            <input type={showPassword ? "text" : "password"} ref={password} placeholder="Enter your password" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>

                    </form>

                    <Link to="/insert" className="create-link">Create Account</Link>

                </div>
            </div>
        </>
    );
};

export default Login;
