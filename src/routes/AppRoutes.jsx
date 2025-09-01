import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../pages/ForgotPassword";
import CreateNewPassword from "../pages/CreateNewPassword";
import PasswordUpdated from "../pages/PasswordUpdated";
import PrivateLayout from '../layouts/PrivateLayout';
import Dashboard from "../pages/Dashboard";
import InternshipTable from '../pages/internship/InternshipTable';
import InternshipForm from '../pages/internship/InternshipForm'
import ApplicationTable from '../pages/application/ApplicationTable';
import InternshipCriteria from '../pages/internship/InternshipCriteria';



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<CreateNewPassword />} />
            <Route path="/password-updated" element={<PasswordUpdated />} />
            <Route element={<PrivateLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/internship-table" element={<InternshipTable />} />
                <Route path="/internship-form" element={<InternshipForm />} />
                <Route path="/internship-criteria" element={<InternshipCriteria />} />

                <Route path="/application-table" element={<ApplicationTable />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
} 
