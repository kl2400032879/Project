// src/components/MetricCard.jsx
import React from 'react';

const MetricCard = ({ count, label, isHighlighted }) => {
  // Styles applied directly for simplicity
  const cardStyle = {
    padding: '20px',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: isHighlighted ? '0 8px 15px rgba(0, 0, 0, 0.15)' : '0 4px 10px rgba(0, 0, 0, 0.1)',
    minWidth: '150px',
    backgroundColor: isHighlighted ? 'var(--color-primary)' : 'white',
    color: isHighlighted ? 'white' : 'var(--color-text)',
    transform: isHighlighted ? 'translateY(-20px)' : 'none', /* For the raised central card */
    transition: 'all 0.3s ease',
  };

  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '5px' }}>{count}</div>
      <div>{label}</div>
    </div>
  );
};

export default MetricCard;