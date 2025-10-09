// src/Pages/JobApplicationPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button.jsx';
import './JobApplicationPage.css'; // ⬅️ Create this CSS file next

const JobApplicationPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    coverLetter: '',
    portfolio: null,
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ Placeholder for API submission logic
    alert(`Application submitted for job ID: ${jobId}!`);
    navigate('/applications'); // Go to My Applications page
  };

  const handleCancel = () => {
    navigate(`/job/${jobId}`);
  };

  // Utility component for file/portfolio blocks
  const SubmissionBlock = ({ name, label, icon }) => (
    <div className="submission-block">
      <input
        type="file"
        name={name}
        onChange={handleChange}
        id={name}
        style={{ display: 'none' }}
      />
      <label htmlFor={name}>
        <div className="block-icon">{icon}</div>
        <p>{formData[name] ? formData[name].name : label}</p>
      </label>
    </div>
  );

  return (
    <div className="application-page-container">
      <div className="application-form">
        <h2>Submit Proposal</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Cover Letter */}
          <label className="input-label">Cover Letter</label>
          <textarea
            name="coverLetter"
            rows="6"
            placeholder="Introduce yourself and explain why you're a perfect fit..."
            onChange={handleChange}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '20px', resize: 'vertical' }}
          />

          {/* Attach File Button */}
          <div className="attach-file">
            {/* 📎 Icon placeholder */}
            <input type="file" id="attachFile" />
            <label htmlFor="attachFile">Attach File</label>
          </div>
          
          {/* Portfolio & Certificate Blocks */}
          <div className="submission-blocks-container">
            <SubmissionBlock 
              name="portfolio"
              label="Add a portfolio project"
              icon="📋" // Placeholder for an icon
            />
            <SubmissionBlock 
              name="certificate"
              label="Add a certificate"
              icon="🎖️" // Placeholder for an icon
            />
          </div>

          {/* Terms (Simplified) */}
          <section className="terms-section">
            <h3>Terms</h3>
            <label className="input-label">How long will this project take?</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
                <option value="">Select Duration</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
            </select>
          </section>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button type="submit" variant="primary">Submit Proposal</Button>
            <Button type="button" onClick={handleCancel} variant="secondary">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPage;