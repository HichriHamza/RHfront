import React, { useState } from 'react';
import { Heart, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';

function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    department: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // TODO: Replace with actual API call for registration
    console.log('Signup attempt:', formData);

    // On successful signup navigate to dashboard or login page
    // navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Heart className="auth-heart-icon" />
          </div>
          <h2 className="auth-title">Join WellCare</h2>
          <p className="auth-subtitle">Create your account to start your wellness journey</p>
        </div>

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="name-row">
            
            <div className="form-group half-width">
              <div className="input-container">
                <User className="input-icon" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  id="firstName"
                  autoComplete="off"
                />
                <label
                  className={`floating-label${formData.firstName ? ' filled' : ''}`}
                  htmlFor="firstName"
                >
                  First name
                </label>
              </div>
            </div>

            <div className="form-group half-width">
            
              <div className="input-container">
                <User className="input-icon"/>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  id="Lastname"
                  autoComplete='off'
                  required
                  />
                  <label
                  className={`floating-label${formData.lastName ? ' filled' : ''}`}
                  htmlFor="lastName"
                >
                  Last name
                </label>

            </div>
                </div>
          </div>

          <div className="form-group">
            {/* <label className="form-label">Email Address</label> */}
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                id="email"
                required
              />
              <label
                  className={`floating-label${formData.email ? ' filled' : ''}`}
                  htmlFor="Email"
                >
                  Email Adress
                </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="">Select your department</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">Human Resources</option>
              <option value="finance">Finance</option>
              <option value="operations">Operations</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group password-group">
            {/* <label className="form-label">Password</label> */}
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input password-input"
                required
                minLength={8}
              />
              <label
                  className={`floating-label${formData.password ? ' filled' : ''}`}
                  htmlFor="Password"
                >
                  Password
                </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <Eye className="eye-icon" /> : <EyeOff className="eye-icon" />}
              </button>
            </div>
            {/* <p className="password-hint">Password must be at least 8 characters long</p> */}
            {/* change to regular expression !!!  */}
          </div>

          <div className="form-group">
            {/* <label className="form-label">Confirm Password</label> */}
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input password-input"
                
                required
              />
              <label
                  className={`floating-label${formData.confirmPassword ? ' filled' : ''}`}
                  htmlFor="ConfirmPassword"
                >
                  Confirm Password
                </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
              >
                {showConfirmPassword ? <Eye className="eye-icon" /> : <EyeOff className="eye-icon" />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-switch-text">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="auth-switch-link"
              type="button"
            >
              Sign in here
            </button>
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="back-home-btn"
          type="button"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;