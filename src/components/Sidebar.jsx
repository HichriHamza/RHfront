import React from 'react';
import { 
  Heart, 
  Users, 
  BarChart3, 
  LogOut,
  User,
  Home,
  TrendingUp,
  Calendar,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userName = "MizouH" }) => {
  const navigate = useNavigate();
  

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/employees', label: 'Employee Management', icon: Users },
    { path: '/analytics', label: 'Mental Health Analytics', icon: BarChart3 },
    { path: '/assessments', label: 'Health Assessments', icon: FileText },
    { path: '/interventions', label: 'Early Interventions', icon: Heart },
    { path: '/scheduling', label: 'Scheduling', icon: Calendar },
    { path: '/reports', label: 'Reports & Insights', icon: TrendingUp },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/'); // Redirect to Landing Page
    window.location.reload(); // (optional) to clear app state
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Redirect to Profile page
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-container">
          <div className="logo-icon">
            <Heart className="logo-heart" />
          </div>
          <span className="logo-text">WellCare</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        <nav className="nav-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="nav-item"
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      
      {/* User Profile Section */}
      <div className="sidebar-profile">
        <div className="profileName-container">
          <div className="profile-avatar">
            <User className="avatar-icon" />
          </div>
          <div className="profile-info">
            <button 
              onClick={handleProfileClick}
              className="sideprofile-name"
            >
              {userName}
            </button>
            <p className="profile-role">Administrator</p>
          </div>
          <button
            onClick={handleLogout}
            className="logout-btn"
            title="Logout"
          >
            <LogOut className="logout-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
