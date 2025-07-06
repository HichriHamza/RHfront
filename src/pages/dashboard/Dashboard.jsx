// Dashboard.jsx
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
import { useNavigate } from 'react-router-dom';
import StatCard from '../../shared/cards/StatCard.jsx';
import ActivityCard from '../../shared/cards/ActivityCard.jsx';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const statData = [
    {
      label: 'Total Employees',
      value: '1,247',
      change: '+12% from last month',
      icon: <Users className="stat-icon" />,
      color: 'green'
    },
    {
      label: 'Active Assessments',
      value: '342',
      change: '+8% from last week',
      icon: <FileText className="stat-icon" />,
      color: 'blue'
    },
    {
      label: 'Peer Connections',
      value: '892',
      change: '+15% this month',
      icon: <MessageSquare className="stat-icon" />,
      color: 'purple'
    },
    {
      label: 'Wellness Score',
      value: '87%',
      change: '+3% improvement',
      icon: <Heart className="stat-icon" />,
      color: 'green'
    }
  ];

  const activityData = [
    {
      icon: <User className="activity-icon" />,
      color: 'green',
      main: 'New employee assessment completed',
      sub: 'Sarah Mitchell completed her wellness check-in',
      time: '2 min ago'
    },
    {
      icon: <MessageSquare className="activity-icon" />,
      color: 'blue',
      main: 'Peer support session scheduled',
      sub: 'Team Building session for Marketing dept.',
      time: '15 min ago'
    },
    {
      icon: <TrendingUp className="activity-icon" />,
      color: 'purple',
      main: 'Weekly wellness report generated',
      sub: 'Overall wellness scores increased by 3%',
      time: '1 hour ago'
    }
  ];

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
            />
          </div>
          <button className="notification-btn" aria-label="Notifications">
            <Bell className="notification-icon" />
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="activity-section">
        <h2 className="activity-title">Recent Activity</h2>
        <div className="activity-list">
          {activityData.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
