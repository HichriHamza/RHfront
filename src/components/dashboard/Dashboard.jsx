import React from 'react';
import { 
  Users, 
  Bell, 
  Search,
  User,
  Heart,
  FileText,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Used for navigation
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <div className="dashboard-actions">
          <div className="search-container">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              aria-label="Search dashboard" 
              // TODO: Add onChange handler when search functionality is ready
            />
          </div>
          <button 
            className="notification-btn"
            aria-label="Notifications"
            // TODO: Add onClick handler for notifications panel
          >
            <Bell className="notification-icon" />
          </button>

         
        </div>
      </div>

      {/* Stats Cards */}
      {/* 
        NOTE: Data is hardcoded here for now.
        Future improvement: load these stats dynamically from backend via props or API call.
      */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <p className="stat-label">Total Employees</p>
              <p className="stat-value">1,247</p>
              <p className="stat-change positive">↗ +12% from last month</p>
            </div>
            <div className="stat-icon-container green">
              <Users className="stat-icon" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <p className="stat-label">Active Assessments</p>
              <p className="stat-value">342</p>
              <p className="stat-change positive">↗ +8% from last week</p>
            </div>
            <div className="stat-icon-container blue">
              <FileText className="stat-icon" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <p className="stat-label">Peer Connections</p>
              <p className="stat-value">892</p>
              <p className="stat-change positive">↗ +15% this month</p>
            </div>
            <div className="stat-icon-container purple">
              <MessageSquare className="stat-icon" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <p className="stat-label">Wellness Score</p>
              <p className="stat-value">87%</p>
              <p className="stat-change positive">↗ +3% improvement</p>
            </div>
            <div className="stat-icon-container green">
              <Heart className="stat-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h2 className="activity-title">Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon-container green">
              <User className="activity-icon" />
            </div>
            <div className="activity-content">
              <p className="activity-main">New employee assessment completed</p>
              <p className="activity-sub">Sarah Mitchell completed her wellness check-in</p>
            </div>
            <span className="activity-time">2 min ago</span>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon-container blue">
              <MessageSquare className="activity-icon" />
            </div>
            <div className="activity-content">
              <p className="activity-main">Peer support session scheduled</p>
              <p className="activity-sub">Team Building session for Marketing dept.</p>
            </div>
            <span className="activity-time">15 min ago</span>
          </div>

          <div className="activity-item">
            <div className="activity-icon-container purple">
              <TrendingUp className="activity-icon" />
            </div>
            <div className="activity-content">
              <p className="activity-main">Weekly wellness report generated</p>
              <p className="activity-sub">Overall wellness scores increased by 3%</p>
            </div>
            <span className="activity-time">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
