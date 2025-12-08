import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function View() {
    var [info, reInfo] = useState([]);
    var [loading, setLoading] = useState(true);

    const nav = useNavigate();

    // ✅ LOGIN CHECK FIRST
    useEffect(() => {
        if (!localStorage.getItem("login")) {
            nav("/");
        }
    }, []);

    // ✅ FETCH DATA
    useEffect(() => {
        axios.get("https://69317ff811a8738467cf24f1.mockapi.io/rita")
            .then(res => {
                reInfo(res.data);
                setTimeout(() => setLoading(false), 1000); // 1 sec loader
            });
    }, []);

    // ✅ SHOW LOADER
    if (loading) return <h2>Loading...</h2>;

    // ✅ DELETE
    const remove = (id) => {
        axios.delete(`https://69317ff811a8738467cf24f1.mockapi.io/rita/${id}`)
            .then(() => {
                axios.get('https://69317ff811a8738467cf24f1.mockapi.io/rita')
                    .then(res => reInfo(res.data));
            });
    };

    return (
        <>
            <div className="view-container">
                <h2 className="view-title">User List</h2>

                <div className="table-container">
                    <table className="view-table">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>

                        <tbody>
                            {info.map((e, index) => (
                                <tr key={e.id}>
                                    <td>{index + 1}</td>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td><button onClick={() => remove(e.id)}>Delete</button></td>
                                    <td><button onClick={() => nav(`/update/${e.id}`)}>Update</button></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button className="btn btn-logout" onClick={() => { localStorage.removeItem("login"); nav("/"); }}>Logout</button>
            </div>
        </>
    );
}

export default View;
