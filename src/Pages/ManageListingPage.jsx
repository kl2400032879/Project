// src/Pages/ManageListingsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageListingsPage.css'; 

// Dummy data mirroring the prototype's table content
const dummyListings = [
    { id: 1, title: 'UI/UX Designer', location: 'Remote', applicants: 10, status: 'Active', posted: 'Mar 20, 2025' },
    { id: 2, title: 'React Developer', location: 'New York', applicants: 5, status: 'Paused', posted: 'Mar 5, 2025' },
    { id: 3, title: 'Data Analyst', location: 'San Francisco', applicants: 0, status: 'Draft', posted: 'Not yet published' },
    { id: 4, title: 'Sales Executive', location: 'Chicago', applicants: 8, status: 'Active', posted: 'Apr 30, 2025' },
    { id: 5, title: 'Product Manager', location: 'Austin', applicants: 7, status: 'Paused', posted: 'Mar 10, 2025' },
];

const ListingRow = ({ listing }) => {
    const statusStyle = {
        Active: { backgroundColor: '#E8F5E9', color: '#4CAF50' }, // Green
        Paused: { backgroundColor: '#FFFDE7', color: '#FFC107' }, // Yellow
        Draft: { backgroundColor: '#E0F7FA', color: '#00BCD4' },    // Cyan
    };

    const navigate = useNavigate();

    const handleAction = (action) => {
        if (action === 'Edit') {
            navigate(`/post-job?id=${listing.id}`); // Navigate to the edit form
        } else {
            alert(`${action} listing: ${listing.title}`);
        }
    };

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{listing.title}</td>
            <td>{listing.location}</td>
            <td>{listing.applicants}</td>
            <td>
                <span className="status-tag" style={statusStyle[listing.status]}>
                    {listing.status}
                </span>
            </td>
            <td>{listing.posted}</td>
            <td className="actions-cell">
                <button onClick={() => handleAction('Edit')} title="Edit">✏️</button>
                <button onClick={() => handleAction('Pause/Activate')} title="Pause/Activate">⏯️</button>
                <button onClick={() => handleAction('Delete')} title="🗑️</button>
            </td>
        </tr>
    );
};

const ManageListingsPage = () => {
    return (
        <div className="manage-listings-page">
            <main className="listings-content">
                <h2>Manage Listings</h2>
                
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Location</th>
                                <th>Applicants</th>
                                <th>Status</th>
                                <th>Date Published</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyListings.map(listing => <ListingRow key={listing.id} listing={listing} />)}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default ManageListingsPage;