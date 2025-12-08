import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import View from './view';
import Insert from './insert';
import Login from './login';
import {  HashRouter, Route, Routes } from 'react-router-dom';
import Update from './update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/view" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

