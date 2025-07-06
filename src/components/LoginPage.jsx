import React, { useState } from 'react';
import { Heart, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AuthPages.css';

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Static user data for testing
  const staticAccount = {
    email: 'user@example.com',
    password: 'password123',
    userName: 'MizouH'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Advanced email format validation
  const isValidEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error('Email and password are required.', {
        position: 'top-right',
        theme: 'colored',
        style: { backgroundColor: '#fee2e2', color: '#991b1b' }
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Invalid email format.', {
        position: 'top-right',
        theme: 'colored',
        style: { backgroundColor: '#ffedd5', color: '#c2410c' }
      });
      return;
    }

    if (email === staticAccount.email && password === staticAccount.password) {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ userName: staticAccount.userName }));
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials. Please try again.', {
        position: 'top-right',
        theme: 'colored',
        style: { backgroundColor: '#fef2f2', color: '#b91c1c' }
      });
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Heart className="auth-heart-icon" />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to continue your wellness journey</p>
        </div>

        {/* ✅ Form that submits on Enter key */}
        <form className="auth-form" onSubmit={handleLogin}>
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
                htmlFor="email"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input password-input"
                required
              />
              <label
                className={`floating-label${formData.password ? ' filled' : ''}`}
                htmlFor="password"
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

          <button type="submit" className="auth-submit-btn">
            Sign In
          </button>
        </form>

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

        <button onClick={() => navigate('/')} className="back-home-btn">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
