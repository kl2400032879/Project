// src/Pages/JobListingPage.jsx
import React from 'react';
import JobCard from '../Components/JobCard.jsx'; // Make sure JobCard is created
import Input from '../Components/Input.jsx';   // Make sure Input is created
import './JobListingPage.css';

// Dummy Data (Needed for the page to render)
const dummyJobs = [
  { id: 1, title: "Data Analyst", company: "BoldTech Inc.", details: ["Contract", "$60,000"], tags: ["SQL", "Tableau"], rating: "4.9" },
  { id: 2, title: "Content Writer", company: "ShopSphere Ltd.", details: ["Per-Article", "$200/article"], tags: ["SEO", "Blogging"], rating: "4.6" },
];

const JobListingPage = () => {
  return (
    <div className="job-listing-page">
      
      {/* ⚠️ Placeholder for the common Navbar/Header */}
      <header className="listing-header">
        <h1 className="logo">MVS</h1>
        <nav>
          <a href="/jobs">Find Jobs</a>
          <a href="/applications">My Applications</a>
          <a href="/messages">Messages</a>
        </nav>
        <div className="search-bar">
          {/* Simple Search Input */}
          <Input placeholder="Search Job" style={{ width: '300px', marginBottom: 0 }} />
        </div>
      </header>

      <main className="job-listings-main">
        <div className="illustration-banner">
          {/* Illustration placeholder */}
           
        </div>

        <div className="job-cards-container">
          {dummyJobs.map(job => (
            // You must ensure the JobCard component is created in src/components/
            <JobCard key={job.id} {...job} company={job.company + " | " + job.details.join(' • ')} />
          ))}
        </div>
        
        {/* Pagination Controls */}
        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </main>
    </div>
  );
};

export default JobListingPage;