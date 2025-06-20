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
import './Sidebar.css';
import { useNavigate } from 'react-router-dom'; // Required to navigate

const Sidebar = ({ activeTab, setActiveTab, userName = "MizouH" }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'employees', label: 'Employee Management', icon: Users },
    { id: 'analytics', label: 'Mental Health Analytics', icon: BarChart3 },
    { id: 'assessments', label: 'Health Assessments', icon: FileText },
    { id: 'interventions', label: 'Early Interventions', icon: Heart },
    { id: 'scheduling', label: 'Scheduling', icon: Calendar },
    { id: 'reports', label: 'Reports & Insights', icon: TrendingUp },
  ];

  const handleLogout = () => {
    localStorage.removeItem('authenticated'); // Remove auth flag
    navigate('/'); // Redirect to Landing Page ("/")
    window.location.reload(); // Force full reload to reset app state
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
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
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
              onClick={handleProfileClick} // Go to Profile
              className="sideprofile-name"
            >
              {userName}
            </button>
            <p className="profile-role">Administrator</p>
          </div>
          <button
            onClick={handleLogout} // Correct Logout Logic
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
