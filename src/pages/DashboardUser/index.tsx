import React, { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import BookingHistory from '../../components/BookingHistory';
import './style.css';
import BlogWriting from '../../components/BlogWriting';

const DashboardUser: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>(''); // Initially, no active component

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div id="dashboard-user" className="flex">
      <div className={`dashboard-sidebar`}>
        {/* Sidebar buttons */}
        <div className="sidebar-buttons">
          <button
            className={activeComponent === 'profile' ? 'active' : ''}
            onClick={() => handleComponentChange('profile')}
          >
            Profile
          </button>
          <button
            className={activeComponent === 'bookingHistory' ? 'active' : ''}
            onClick={() => handleComponentChange('bookingHistory')}
          >
            Booking History
          </button>
          <button
            className={activeComponent === 'blogEditor' ? 'active' : ''}
            onClick={() => handleComponentChange('blogEditor')}
          >
            Blog Editor
          </button>
          {/* Add more buttons as needed */}
        </div>
      </div>
      <div className="dashboard-main-content">
        {/* Render components based on the active component */}
        {activeComponent === 'profile' && <UserProfile />}
        {activeComponent === 'bookingHistory' && <BookingHistory />}
        {activeComponent === 'blogEditor' && <BlogWriting />}
      </div>
    </div>
  );
};

export default DashboardUser;
