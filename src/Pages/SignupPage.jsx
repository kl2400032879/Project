// src/pages/SignupPage.jsx
import React, { useState } from "react";
import Button from "../Components/Button.jsx"; // Correct path from pages to components
import Input from "../Components/Input.jsx";
import "./SignupPage.css"; // Create this CSS file for styling

const SignupPage = () => {
  const [role, setRole] = useState('talent'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ Add form submission and API call logic here
    console.log(`Submitting form for: ${role}`);
  };

  return (
    <div className="signup-page">
      <div className="signup-illustration">
        {/* Placeholder for your signup illustration */}
              </div>
      <div className="signup-card">
        <h2>Signup</h2>
        
        {/* Tab Selector */}
        <div className="role-tabs">
          <button
            className={role === 'talent' ? 'active' : ''}
            onClick={() => setRole('talent')}
          >Talent</button>
          <button
            className={role === 'employer' ? 'active' : ''}
            onClick={() => setRole('employer')}
          >Employer</button>
        </div>

        <form onSubmit={handleSubmit}>
          {role === 'talent' ? (
            <>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email Address" required />
            </>
          ) : (
            <>
              <input type="text" placeholder="Company Name" required />
              <input type="email" placeholder="Business Email Address" required />
            </>
          )}
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '15px' }}>
            Signup
          </Button>

          <div className="or-divider">or continue with</div>
          
          <Button variant="secondary" style={{ width: '100%', marginBottom: '10px' }}>
            {/* 🔗 Add Google Icon here */}
            Google
          </Button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;