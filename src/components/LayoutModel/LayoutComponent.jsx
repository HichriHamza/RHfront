import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar';

const LayoutComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState('Guest'); // Default to 'Guest'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(prev => !prev);
    }
  };

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // On desktop, force sidebar open
      if (!mobile) {
        setIsSidebarOpen(false);
      }
      // On mobile, initially close sidebar
      else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load user data once on mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserName(user.userName || 'Guest');
      } catch (error) {
        console.error('Failed to parse user data:', error);
        setUserName('Guest');
      }
    }
  }, []);

  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle"
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 200,
            background: '#22c55e',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      )}

      <Sidebar userName={userName} isOpen={isSidebarOpen} />

      <div className="main-content" style={{ flex: 1, padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;
