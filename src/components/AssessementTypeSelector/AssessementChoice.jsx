import React from 'react';
import './AssessementChoice.css';

const AssessmentChoice = ({ onSelect }) => (
  <div className="assessment-choice">
    <h2>Choose how to create your assessment</h2>
    <div className="option-grid">
      <button onClick={() => onSelect('ai')} className="option-card">
        <h3>✨ Generate with AI</h3>
        <p>Let AI create a health assessment survey for you</p>
      </button>
      <button onClick={() => onSelect('custom')} className="option-card">
        <h3>📝 Create it yourself</h3>
        <p>Upload or manually build your own questions</p>
      </button>
    </div>
  </div>
);

export default AssessmentChoice;
