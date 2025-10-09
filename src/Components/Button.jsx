// src/components/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = {
    cursor: 'pointer',
    padding: '12px 25px',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    fontSize: '1rem',
    textDecoration: 'none',
    textAlign: 'center'
  };

  const variantStyle = variant === 'primary' ? {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    border: 'none',
  } : {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '2px solid var(--color-primary)',
  };

  return (
    <button style={{ ...baseStyle, ...variantStyle }} {...props}>
      {children}
    </button>
  );
};

export default Button;