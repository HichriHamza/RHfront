import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Camera } from 'lucide-react';
import './Profile.css';

const Profile = ({ userName = "Dr. Sarah Johnson" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userName,
    email: "sarah.johnson@wellcare.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 2023",
    role: "Administrator",
    department: "Mental Health Services",
    bio: "Experienced healthcare administrator with over 10 years of experience in mental health services and employee wellness programs."
  });

  const [editData, setEditData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">User Profile</h1>
        {!isEditing ? (
          <button onClick={handleEdit} className="edit-btn">
            <Edit3 className="edit-icon" />
            Edit Profile
          </button>
        ) : (
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">
              <Save className="action-icon" />
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              <X className="action-icon" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="profile-content">
        {/* Avatar Section */}
        <div className="avatar-section">
          <div className="avatar-container">
            <div className="avatar-large">
              <User className="avatar-icon-large" />
            </div>
            {isEditing && (
              <button className="avatar-edit-btn">
                <Camera className="camera-icon" />
              </button>
            )}
          </div>
          <div className="avatar-info">
            {!isEditing ? (
              <>
                <h2 className="profile-name">{profileData.name}</h2>
                <p className="profile-role-text">{profileData.role}</p>
                <p className="profile-department">{profileData.department}</p>
              </>
            ) : (
              <div className="edit-form-section">
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="edit-input name-input"
                />
                <input
                  type="text"
                  value={editData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="edit-input role-input"
                />
                <input
                  type="text"
                  value={editData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="edit-input department-input"
                />
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="info-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon-container">
                <Mail className="info-icon" />
              </div>
              <div className="info-content">
                <label className="info-label">Email Address</label>
                {!isEditing ? (
                  <p className="info-value">{profileData.email}</p>
                ) : (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="edit-input"
                  />
                )}
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-container">
                <Phone className="info-icon" />
              </div>
              <div className="info-content">
                <label className="info-label">Phone Number</label>
                {!isEditing ? (
                  <p className="info-value">{profileData.phone}</p>
                ) : (
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="edit-input"
                  />
                )}
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-container">
                <MapPin className="info-icon" />
              </div>
              <div className="info-content">
                <label className="info-label">Location</label>
                {!isEditing ? (
                  <p className="info-value">{profileData.location}</p>
                ) : (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="edit-input"
                  />
                )}
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-container">
                <Calendar className="info-icon" />
              </div>
              <div className="info-content">
                <label className="info-label">Joined</label>
                <p className="info-value">{profileData.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="info-section">
          <h3 className="section-title">About</h3>
          <div className="bio-container">
            {!isEditing ? (
              <p className="bio-text">{profileData.bio}</p>
            ) : (
              <textarea
                value={editData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="bio-textarea"
                rows="4"
                placeholder="Tell us about yourself..."
              />
            )}
          </div>
        </div>

        {/* Activity Summary */}
        <div className="info-section">
          <h3 className="section-title">Activity Summary</h3>
          <div className="activity-stats">
            <div className="activity-stat">
              <div className="stat-number">156</div>
              <div className="stat-label">Employees Managed</div>
            </div>
            <div className="activity-stat">
              <div className="stat-number">23</div>
              <div className="stat-label">Reports Generated</div>
            </div>
            <div className="activity-stat">
              <div className="stat-number">89%</div>
              <div className="stat-label">Team Wellness Score</div>
            </div>
            <div className="activity-stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Months Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;