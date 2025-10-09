// src/components/Input.jsx
import React from 'react';

const Input = ({ label, type = 'text', placeholder, ...props }) => {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      {label && <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        {...props}
      />
    </div>
  );
};

export default Input;