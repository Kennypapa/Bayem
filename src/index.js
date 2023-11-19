import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/auth/login';
import Dashboard from './pages/dashboard';
import Roles from './pages/roles/index';
import ProtectedLayout from './components/protectedLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} >
          <Route path="/login" element={<Login />} />
          <Route path="" element={<ProtectedLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="roles" element={<Roles />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
