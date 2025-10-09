// src/main.jsx (Update)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../index.css';

import App from './App.jsx'; 
import SignupPage from "./Pages/SignupPage.jsx"; 
import LoginPage from "./Pages/LoginPage.jsx"; 
import VerificationPage from "./Pages/VerificationPage.jsx"; 
import EmployerProfileSetup from "./Pages/EmployerProfileSetup.jsx"; // ⬅️ NEW IMPORT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        
        <Route path="/" element={<App />} /> 
        
        {/* Authentication Flow */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/verify" element={<VerificationPage />} />
        
        {/* Profile Setup */}
        <Route path="/employer/setup" element={<EmployerProfileSetup />} /> 
        {/* ⚠️ Ensure Talent Profile Setup is also added */}

        {/* Job Seeker Views */}
        <Route path="/jobs" element={<JobListingPage />} /> 
        <Route path="/dashboard" element={<div>Employer Dashboard Placeholder</div>} /> {/* ⬅️ Placeholder for Dashboard */}
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);