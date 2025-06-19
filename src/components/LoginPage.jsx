import React, { useState } from 'react';
import { Heart, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';

function LoginPage () {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email: formData.email, password: formData.password });

    // TODO: Replace this with real authentication logic
    // navigate('/dashboard'); // if authenticated
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Heart className="auth-heart-icon" />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to continue your wellness journey</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                
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
            <label className="form-label">Password</label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input password-input"
                
                required
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
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="auth-submit-btn"
          >
            Sign In
          </button>
        </div>

        <div className="auth-footer">
          <p className="auth-switch-text">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="auth-switch-link"
            >
              Sign up here
            </button>
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="back-home-btn"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
