import React, { useState } from 'react';
import Sidebar from '../SideBar';

const LayoutComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      {/* Toggle button (visible only on small screens via CSS) */}
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
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          display: 'none' // hidden by default (will show via media query)
        }}
      >
        ☰
      </button>

      {/* Sidebar with dynamic class based on toggle */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content — margin for desktop, no margin for mobile */}
      <div className="main-content" style={{ flex: 1, padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;
