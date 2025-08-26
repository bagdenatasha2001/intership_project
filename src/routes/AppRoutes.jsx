import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../pages/ForgotPassword";
import CreateNewPassword from "../pages/CreateNewPassword";
import PasswordUpdated from "../pages/PasswordUpdated";
import PrivateLayout from '../layouts/PrivateLayout';
import Dashboard from "../pages/Dashboard";
import Intership from '../pages/Internship';

// import IntershipForm from '../pages/InternshipForm';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<CreateNewPassword />} />
            <Route path="/password-updated" element={<PasswordUpdated />} />
            <Route element={<PrivateLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/internship" element={<Intership/>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
} 
