// src/pages/VerificationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx'; 
import './VerificationPage.css'; // Create this simple CSS file

const VerificationPage = () => {
  const navigate = useNavigate();
  const [codes, setCodes] = useState(new Array(6).fill(''));
  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newCodes = [...codes];
    newCodes[index] = element.value;
    setCodes(newCodes);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const code = codes.join('');
    // ⚠️ Replace alert with API verification and redirect to ProfileSetup
    alert(`Verifying code: ${code}`); 
    navigate('/profile/setup'); 
  };

  return (
    <div className="verification-page">
      <div className="verification-card">
        <h2>Login</h2>
        <p>Please enter the 6-digit code sent to your email</p>
        
        <div className="code-inputs">
          {codes.map((data, index) => (
            <Input
              key={index}
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              style={{ width: '50px', margin: '0 5px', textAlign: 'center' }}
            />
          ))}
        </div>

        <p className="resend-code">Didn't Receive Code</p>
        
        <Button onClick={handleSubmit} variant="primary" style={{ width: '100%', marginTop: '30px' }}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default VerificationPage;