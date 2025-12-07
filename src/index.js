import React from 'react';
import ReactDOM from 'react-dom/client';
import View from './view';
import Insert from './insert';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './update';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/crud1">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/view" element={<View />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

