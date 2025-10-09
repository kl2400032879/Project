// src/pages/FindJobsPage.jsx
import React, { useState, useEffect } from 'react';
import JobCard from '../Components/JobCard.jsx';
import { mockJobs } from '../Data/mockJobs.jsx'; // Import your mock data

const FindJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for your Search Input

  useEffect(() => {
    // Simulate API fetch on component mount
    setJobs(mockJobs); 
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You would typically debounce this function for performance
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (jobId) => {
    // TODO: Implement routing to the JobDetailPage (e.g., using React Router)
    console.log(`Navigating to job details for ID: ${jobId}`);
  };

  return (
    <div className="find-jobs-container">
      {/* TODO: Integrate your Input.jsx here for the search bar */}
      <input 
        type="text" 
        placeholder="Search Job..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      
      <div className="job-listings">
        {filteredJobs.map(job => (
          <JobCard 
            key={job.id} 
            job={job} 
            onViewDetails={handleViewDetails}
            isApplication={false} // This is the browse page
          />
        ))}
      </div>
    </div>
  );
};

export default FindJobsPage;