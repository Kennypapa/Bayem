import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from './components/auth/login';
import Dashboard from './pages/dashboard';
import Roles from './pages/roles/index';
import Workers from './pages/workers';
import CreateTask from './pages/tasks/index';
import FieldMapping from './pages/field-mapping';
import Purchase from './pages/purchase';
import Plans from './pages/plans';
import Salary from './pages/salary';
import Reports from './pages/reports'
import ExpensesCategory from './pages/expenses-category';
import ProtectedLayout from './components/protectedLayout';
import GetStarted from './pages/get-started';
import WeatherForecast from './pages/weather-forecast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} >
    
          <Route path="" element={<GetStarted />} />
          <Route path="/" element={<ProtectedLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="roles" element={<Roles />} />
            <Route path="workers" element={<Workers />} />
            <Route path="create-task" element={<CreateTask />} />
            <Route path="field-mapping" element={<FieldMapping />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="plans" element={<Plans />} />
            <Route path="salary" element={<Salary />} />
            <Route path="weather-update" element={<WeatherForecast />} />
            <Route path="reports" element={<Reports />} />
            <Route path="expenses-category" element={<ExpensesCategory />} />
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
