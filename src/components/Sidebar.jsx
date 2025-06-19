import React from 'react';
import { 
  Heart, 
  Users, 
  BarChart3, 
  Shield, 
  Settings,
  LogOut,
  User,
  Home,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, onProfileClick, onLogout, userName = "Dr. Sarah Johnson" }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'employees', label: 'Employee Management', icon: Users },
    { id: 'analytics', label: 'Mental Health Analytics', icon: BarChart3 },
    { id: 'peer-support', label: 'Peer Support Network', icon: MessageSquare },
    { id: 'assessments', label: 'Health Assessments', icon: FileText },
    { id: 'interventions', label: 'Early Interventions', icon: Heart },
    { id: 'scheduling', label: 'Scheduling', icon: Calendar },
    { id: 'reports', label: 'Reports & Insights', icon: TrendingUp },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

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
        <div className="profile-container">
          <div className="profile-avatar">
            <User className="avatar-icon" />
          </div>
          <div className="profile-info">
            <button 
              onClick={onProfileClick}
              className="profile-name"
            >
              {userName}
            </button>
            <p className="profile-role">Administrator</p>
          </div>
          <button
            onClick={onLogout}
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