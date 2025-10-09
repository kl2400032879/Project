// src/Pages/MyApplicationsPage.jsx
import React, { useState } from 'react';
import Button from '../Components/Button.jsx'; 
import './MyApplicationsPage.css'; // ⬅️ Must create this CSS file too

const applicationData = [
    { id: 1, title: 'UI/UX Designer', company: 'BoldTech Inc.', date: 'March 15, 2025', status: 'Under Review' },
    { id: 2, title: 'Frontend Developer', company: 'ShopSphere Ltd.', date: 'April 10, 2025', status: 'Interview Scheduled' },
    { id: 3, title: 'Product Designer', company: 'CloudNest Solutions', date: 'March 25, 2025', status: 'Pending' },
    { id: 4, title: 'Data Analyst', company: 'Insightful Data Corp.', date: 'March 30, 2025', status: 'Rejected' },
];

const ApplicationCard = ({ application }) => {
    const statusColors = {
        'Under Review': '#2196F3',
        'Interview Scheduled': '#8C52FF',
        'Pending': '#FFC107',
        'Rejected': '#F44336',
    };
    const action = application.status === 'Rejected' 
        ? { label: 'View Feedback', action: () => alert('View Feedback') }
        : { label: 'View Details', action: () => alert('View Details') };
        
    return (
        <div className="application-card">
            <div className="app-details">
                <h3>{application.title}</h3>
                <p className="company-info">{application.company} | {application.date}</p>
                <div className="status-badge" style={{ color: statusColors[application.status], display: 'flex', alignItems: 'center' }}>
                    <span className="status-dot" style={{ backgroundColor: statusColors[application.status], width: '8px', height: '8px', borderRadius: '50%', marginRight: '8px' }}></span>
                    {application.status}
                </div>
            </div>
            <div className="app-actions">
                <Button onClick={action.action} variant="secondary" style={{ padding: '8px 15px' }}>
                    {action.label}
                </Button>
            </div>
        </div>
    );
};

const MyApplicationsPage = () => {
    const [statusFilter, setStatusFilter] = useState('All');
    
    // Filtering logic placeholder
    const filteredApplications = applicationData.filter(app => statusFilter === 'All' || app.status === statusFilter);

    return (
        <div className="applications-page-container">
            <h2>My Applications</h2>
            
            <div className="filter-bar">
                <select onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">Status: All</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <select>
                    <option value="Newest">Date Applied: Newest</option>
                </select>
            </div>

            <div className="application-list">
                {filteredApplications.map(app => <ApplicationCard key={app.id} application={app} />)}
            </div>
        </div>
    );
};

export default MyApplicationsPage;