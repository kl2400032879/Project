// src/Pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx'; 
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('talent');
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ Placeholder for API call and authentication logic
    alert(`Attempting login for ${role} with email: ${formData.email}`);
    
    // Redirect based on role after successful login
    if (role === 'talent') {
      navigate('/jobs'); 
    } else {
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="login-page">
      {/* 🖼️ Illustration placeholder */}
      <div className="login-illustration">
        
      </div>

      <div className="login-card">
        <h2>Login</h2>
        
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
          <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <Input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <div className="login-options">
            <label>
              <input 
                type="checkbox" 
                name="rememberMe" 
                checked={formData.rememberMe} 
                onChange={handleChange} 
              />
              Remember Me
            </label>
            <a href="/forgot">Forgot Password?</a>
          </div>

          <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '30px' }}>
            Login
          </Button>

          <div className="or-divider">or continue with</div>
          <Button variant="secondary" style={{ width: '100%' }}>
            Google
          </Button>
          
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;