import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipientFlow.css';

const RecipientFlow = () => {
  const navigate = useNavigate();

  return (
    <div className="recipient-flow">
      <header className="recipient-header">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>💕 Love Bite Foundation</h1>
        </div>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </header>

      <main className="recipient-content">
        <div className="recipient-hero">
          <h1>🤝 Ready to Apply for Funding?</h1>
          <p>We're here to support couples in achieving their dreams</p>
        </div>

        <div className="coming-soon-card">
          <div className="icon-large">🔧</div>
          <h2>Application System in Development!</h2>
          <p>We're building a comprehensive verification system for genuine couples</p>
          
          <div className="process-preview">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>KYC Verification</h4>
                <p>Submit your identity documents for verification</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Couple Authentication</h4>
                <p>Upload genuine couple photos to verify your relationship</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Admin Review</h4>
                <p>Our team reviews your application for authenticity</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Fund Transfer</h4>
                <p>Approved funds transferred directly to your bank account</p>
              </div>
            </div>
          </div>

          <div className="features-coming">
            <h3>Upcoming Features</h3>
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">📋</span>
                <h4>Complete KYC System</h4>
                <p>Secure document verification process</p>
              </div>
              
              <div className="feature-card">
                <span className="feature-icon">💑</span>
                <h4>Couple Photo Verification</h4>
                <p>AI-powered authenticity checking</p>
              </div>
              
              <div className="feature-card">
                <span className="feature-icon">🏦</span>
                <h4>Direct Bank Transfer</h4>
                <p>NEFT/RTGS integration for instant transfers</p>
              </div>
              
              <div className="feature-card">
                <span className="feature-icon">💰</span>
                <h4>Minimal 2% Fee</h4>
                <p>Transparent, low-cost processing</p>
              </div>
              
              <div className="feature-card">
                <span className="feature-icon">🎯</span>
                <h4>Referral Rewards</h4>
                <p>Earn 1% commission for bringing donors</p>
              </div>
              
              <div className="feature-card">
                <span className="feature-icon">📱</span>
                <h4>Real-time Tracking</h4>
                <p>Track your application status live</p>
              </div>
            </div>
          </div>

          <div className="requirements-info">
            <h3>📋 What You'll Need</h3>
            <div className="requirements-list">
              <div className="req-item">✅ Government ID (Aadhar, PAN)</div>
              <div className="req-item">✅ Bank account details</div>
              <div className="req-item">✅ Genuine couple photographs</div>
              <div className="req-item">✅ Purpose and timeline details</div>
              <div className="req-item">✅ Income/financial documents</div>
            </div>
          </div>

          <div className="notify-section">
            <h3>Get Notified When Applications Open!</h3>
            <div className="notify-form">
              <input type="email" placeholder="Enter your email" className="notify-input" />
              <button className="notify-btn">Notify Me</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipientFlow;
