// src/Pages/TalentProfileSetup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx';
import './TalentProfileSetup.css'; // ⬅️ Create this CSS file next

const dropdownOptions = {
  type: ['Full-time', 'Part-time', 'Freelance', 'Internship'],
  environment: ['Remote', 'Hybrid', 'On-site'],
};

const TalentProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    headline: '',
    location: '',
    skills: [],
    jobType: 'Full-time',
    jobEnvironment: 'Remote',
    summary: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files.length) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSkip = () => {
    navigate('/jobs'); // Skip setup and go to job listings
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // ⚠️ In a real app, send formData to the API
    alert('Profile saved! Proceeding to job search.'); 
    navigate('/jobs'); 
  };
  
  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      e.preventDefault();
      const newSkill = e.target.value.trim();
      if (!formData.skills.includes(newSkill)) {
        setFormData({ ...formData, skills: [...formData.skills, newSkill] });
      }
      e.target.value = ''; // Clear input field
    }
  };

  const handleRemoveTag = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove),
    });
  };

  return (
    <div className="profile-setup-page">
      <div className="profile-form-container">
        <h2>Complete Your Profile</h2>

        <form onSubmit={handleSignup}>
          {/* 1. Job Title/Headline */}
          <Input 
            label="Headline / Job Title"
            name="headline"
            placeholder="e.g., 'UI/UX Designer' or 'Frontend Developer'"
            onChange={handleChange}
            required
          />

          {/* 2. Location (Dropdown for simplicity) */}
          <label className="input-label">Location</label>
          <select name="location" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
            <option value="">Current Location</option>
            <option value="remote">Remote</option>
            <option value="addis-ababa">Addis Ababa</option>
            {/* Add more cities */}
          </select>

          {/* 3. Upload Resume */}
          <label className="input-label">Upload Resume</label>
          <div className="file-upload-box">
            <input 
              type="file" 
              name="resume" 
              onChange={handleChange} 
              id="resume-upload" 
              style={{ display: 'none' }} 
            />
            <label htmlFor="resume-upload" className="file-upload-label">
              {formData.resume ? formData.resume.name : "Choose a file..."}
            </label>
            {/* 📁 Icon placeholder */}
          </div>
          
          {/* 4. Skills Tags */}
          <label className="input-label">Skills Tags</label>
          <Input 
            name="skillsInput"
            placeholder="Skills Tags +"
            onKeyDown={handleAddTag}
          />
          <div className="tags-container">
            {formData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <button type="button" onClick={() => handleRemoveTag(skill)}>x</button>
              </span>
            ))}
          </div>
          
          {/* 5. Job Preferences */}
          <div className="job-preferences">
            <div className="dropdown-group">
                <label className="input-label">Type</label>
                <select name="jobType" onChange={handleChange}>
                  {dropdownOptions.type.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
            <div className="dropdown-group">
                <label className="input-label">Environment</label>
                <select name="jobEnvironment" onChange={handleChange}>
                  {dropdownOptions.environment.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
          </div>
          
          {/* 6. Social Links (Simplified) */}
          <label className="input-label" style={{marginTop: '15px'}}>Social Links +</label>
          <Input placeholder="LinkedIn / Social Profiles" />
          
          {/* 7. Short Bio / Summary */}
          <label className="input-label">Short Bio / Summary</label>
          <textarea 
            name="summary"
            placeholder="Summary"
            onChange={handleChange}
            rows="4"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', marginBottom: '15px', resize: 'vertical' }}
          />

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button type="submit" variant="primary">Signup</Button>
            <Button type="button" onClick={handleSkip} variant="secondary">Skip</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalentProfileSetup;