import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";
import Homepage from "./Pages/HomePage";
import ForgotPassword from "./Pages/forgotpassword";
import Dashboard from './Pages/Dashboard'

function App() {
 return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
 );
}

export default App;
