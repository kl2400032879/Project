import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// -----------------------------------------------------
// IMPORTANT: Ensure your folder is 'pages' (lowercase)
// and the file names match the casing used here.
// -----------------------------------------------------

// Import the main App component (which contains the header/footer and routing logic)
import App from './App.jsx';

// Import your page components using the corrected path: /src/pages/
import SignupPage from "/src/Pages/SignupPage.jsx";
import VerificationPage from "/src/pages/VerificationPage.jsx"; 
import FindJobsPage from "/src/Data/FindJobsPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        {/* The main layout/Home page */}
        <Route path="/" element={<App />} /> 
        
        {/* User Flow Pages */}
        <Route path="/jobs" element={<FindJobsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        
        {/* TODO: Add routes for /login, /profile, /applications, etc. */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
