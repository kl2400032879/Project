// src/components/JobCard.jsx (for the main Find Jobs list)
import React from 'react';

const JobCard = ({ job, onViewDetails, isApplication }) => {
  // Destructure properties based on the job data structure you'll define
  const { title, company, pay, duration, tags, rating, dateApplied, status } = job;

  return (
    <div className="job-card">
      <h3 className="job-title">{title}</h3>
      <p className="job-company">{company}</p>
      
      {/* Display Application Info if on the 'My Applications' page */}
      {isApplication && (
        <p className="application-info">
          Applied: {dateApplied} | Status: <span className={`status-${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
        </p>
      )}

      {/* Quick Stats (visible on Find Jobs page) */}
      {!isApplication && (
        <div className="job-meta-details">
          <span>{pay}</span> | <span>{duration}</span> | <span>{rating} ⭐</span>
        </div>
      )}

      {/* Displaying tags like 'SQL', 'Tableau', etc. */}
      <div className="job-tags">
        {tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
      </div>

      {/* Reuse your Button.jsx component */}
      <button className="button-primary" onClick={() => onViewDetails(job.id)}>
        {isApplication ? 'View Details' : 'Apply Now'} 
      </button>
    </div>
  );
};

export default JobCard;