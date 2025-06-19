import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Users, ChevronRight } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo-container">
              <div className="logo-icon">
                <Heart className="heart-icon" />
              </div>
              <span className="logo-text">WellCare</span>
            </div>
          </div>
          <div className="nav-right">
            <button
              onClick={() => navigate('/login')}
              className="nav-signin-btn"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="nav-signup-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Supporting Your
            <span className="hero-highlight"> Mental Wellness</span>
            <br />at Work
          </h1>
          <p className="hero-subtitle">
            A compassionate platform designed to help organizations monitor and support employee mental health through meaningful peer connections and early intervention.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="hero-cta-btn"
          >
            Start Your Journey
            <ChevronRight className="chevron-icon" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Users className="icon" />
            </div>
            <h3 className="feature-title">Peer Support Network</h3>
            <p className="feature-description">
              Foster meaningful connections through colleague-to-colleague wellness surveys that build empathy and understanding.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield className="icon" />
            </div>
            <h3 className="feature-title">Early Detection</h3>
            <p className="feature-description">
              Identify potential mental health concerns early through thoughtful assessment tools and proactive intervention.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart className="icon" />
            </div>
            <h3 className="feature-title">Holistic Wellbeing</h3>
            <p className="feature-description">
              Create a culture of care where mental health is prioritized and every employee feels valued and supported.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Workplace?</h2>
          <p className="cta-subtitle">
            Join organizations that prioritize mental wellness and create supportive work environments.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="cta-btn"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
