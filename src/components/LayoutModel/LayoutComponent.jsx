import React, { useState } from 'react';
import Sidebar from '../SideBar';
const LayoutComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      {/* Toggle button only on mobile */}
      <button 
        onClick={toggleSidebar} 
        className="sidebar-toggle" 
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: '200',
          background: '#22c55e',
          color: 'white',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'none'
        }}
      >
        ☰
      </button>

      <Sidebar className={isSidebarOpen ? 'sidebar mobile-visible' : 'sidebar mobile-hidden'} />

      <div style={{ flex: 1, paddingLeft: '0', marginLeft: '0' }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;
