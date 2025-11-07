import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./Components/NavBar.jsx"; 
import Button from "./Components/Button.jsx";
import MetricCard from "./Components/MetricCard.jsx";
import FindJobsPage from './Data/FindJobsPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx'; // Make sure this file exists
import VerificationPage from './pages/VerificationPage.jsx'; // <-- IMPORT VERIFICATION PAGE
import './App.css'; 

// --- The Metric Data remains outside the component ---
const metricsData = [
  { count: '1,200+', label: 'Active Users', highlight: false },
  { count: '5,000+', label: 'Employers', highlight: false },
  { count: '1000+', label: 'Jobs Posted', highlight: true },
  { count: '24/7', label: 'Customer Support', highlight: false },
  { count: '15,000+', label: 'Applicants', highlight: false },
];
// -----------------------------------------------------

// --- Component for the Home Page content ---
const HomePageContent = ({ metricsData }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------- 1. Hero Section ----------------- */}
      <section className="hero-section" style={{padding: '50px 10%'}}>
        <div className="hero-content" style={{maxWidth: '500px'}}>
          <h1>Connecting You to the World's Best Tech Talent.</h1>
          <p>Work with the best. Find, evaluate, and hire tech experts who fit your goals.</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <button onClick={() => navigate('/jobs')} style={{padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#7B61FF', color: 'white', cursor: 'pointer', fontWeight: 600}}>Browse Jobs</button>
            <button onClick={() => navigate('/signup?role=employer')} style={{padding: '10px 20px', borderRadius: '8px', border: '1px solid #7B61FF', backgroundColor: 'white', color: '#7B61FF', cursor: 'pointer', fontWeight: 600}}>Post a Job</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for your main illustration */}
        </div>
      </section>

      {/* ----------------- 2. Achievement/Metrics Section ----------------- */}
      <section className="metrics-section">
        <h3 style={{fontSize: '1.5rem', margin: '40px 0', paddingLeft: '10%'}}>Our Achievement</h3>
        <div className="metrics-container" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '0 10%'}}>
          {/* Mapping logic remains the same, adjusted to use inline styling for visibility */}
          {metricsData.map((m, i) => (
             <div key={i} style={{ padding: '20px', borderRadius: '12px', minWidth: '150px', backgroundColor: m.highlight ? '#F0F0FF' : '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 style={{color: '#7B61FF', fontSize: '1.8rem'}}>{m.count}</h2>
                <p style={{color: '#555'}}>{m.label}</p>
             </div>
          ))}
        </div>
      </section>
    </>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="app-container">
      {/* --- Global Header/Navbar --- */}
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePageContent metricsData={metricsData} />} />
          <Route path="/jobs" element={<FindJobsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} /> {/* <-- ADDED ROUTE HERE */}
          <Route path="/about" element={<div style={{ padding: '50px 10%' }}><h2>About Us</h2><p>Our mission is to connect the world's best talent.</p></div>} />
          <Route path="/contact" element={<div style={{ padding: '50px 10%' }}><h2>Contact Us</h2><p>Get in touch with our team.</p></div>} />
        </Routes>
      </main>

      {/* --- Global Footer Section --- */}
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '40px 10%', marginTop: '50px', textAlign: 'center' }}>
        <p>Copyright © 2025 J. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
