// src/Pages/AccountSettingsPage.jsx
import React, { useState } from 'react';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx';
import './AccountSettingsPage.css'; // ⬅️ Create this CSS file next

const AccountSettingsPage = ({ role = 'talent' }) => {
  const [isEmployer] = useState(role === 'employer');
  
  // State for form fields (simplified)
  const [profileData, setProfileData] = useState({
    fullName: '', email: '', phone: '', timezone: '',
    defaultCurrency: '', language: '', industryTag: '',
    // Employer fields
    companyName: '', adminEmail: '' 
  });

  const [notifications, setNotifications] = useState({
    email: true, sms: false, push: true
  });

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  
  const handleToggle = (name) => {
    setNotifications({ ...notifications, [name]: !notifications[name] });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings Saved!');
  };

  return (
    <div className="settings-page-container">
      <div className="settings-card">
        <h2>Account Settings</h2>

        <form onSubmit={handleSave}>
          {isEmployer && (
            <>
              <Input label="Company Name" name="companyName" placeholder="Company Name" onChange={handleProfileChange} />
              <Input label="Admin Contact Email" name="adminEmail" placeholder="Admin Contact Email" onChange={handleProfileChange} />
            </>
          )}

          <div className="form-row-settings">
            <Input label="Full Name" name="fullName" placeholder="Full Name" onChange={handleProfileChange} />
            <Input label="Email" name="email" placeholder="Email" onChange={handleProfileChange} />
          </div>
          <div className="form-row-settings">
            <Input label="Phone Number" name="phone" placeholder="Phone Number" onChange={handleProfileChange} />
            <Input label="Time Zone" name="timezone" placeholder="Time Zone" onChange={handleProfileChange} />
          </div>
          {/* ... Add Dropdowns for Currency/Language here ... */}
          <Input label="Industry Tag" name="industryTag" placeholder="e.g., 'UI/UX Designer'" onChange={handleProfileChange} />
          
          <Button type="submit" variant="primary" style={{ marginTop: '20px' }}>Save</Button>
        </form>

        {/* Notification Settings */}
        <section className="notification-settings">
          <h3>Notification Settings</h3>
          <div className="toggle-row">
            <p>Email Notifications <span>Receive updates via email</span></p>
            <button className={`toggle-switch ${notifications.email ? 'active' : ''}`} onClick={() => handleToggle('email')}>{notifications.email ? 'ON' : 'OFF'}</button>
          </div>
          {/* ... SMS and Push notifications here ... */}
        </section>

        {/* Billing & Security */}
        <section className="billing-security">
          <h3>Privacy & Security</h3>
          <p>This action cannot be undone. All your data will be permanently deleted.</p>
          <Button variant="secondary" onClick={() => alert('Account Deleted!')} style={{backgroundColor: '#F44336', color: 'white', border: 'none'}}>Delete Account</Button>
        </section>
      </div>
    </div>
  );
};

export default AccountSettingsPage;