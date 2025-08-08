import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorFlow.css';

const DonorFlow = () => {
  const navigate = useNavigate();

  return (
    <div className="donor-flow">
      <header className="donor-header">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>💕 Love Bite Foundation</h1>
        </div>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </header>

      <main className="donor-content">
        <div className="donor-hero">
          <h1>💝 Thank You for Choosing to Donate!</h1>
          <p>Your generosity helps couples achieve their dreams</p>
        </div>

        <div className="coming-soon-card">
          <div className="icon-large">🚀</div>
          <h2>Payment System Coming Soon!</h2>
          <p>We're building an amazing donation experience with instant certificates</p>
          
          <div className="features-preview">
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <div className="feature-text">
                <h4>Instant Certificates</h4>
                <p>Receive beautiful certificates immediately after donation</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">💳</span>
              <div className="feature-text">
                <h4>Multiple Payment Options</h4>
                <p>UPI, Cards, Wallets, and Net Banking support</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">📧</span>
              <div className="feature-text">
                <h4>Email Delivery</h4>
                <p>Certificates delivered instantly to your email</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">🔐</span>
              <div className="feature-text">
                <h4>QR Code Verification</h4>
                <p>Secure QR codes for certificate authenticity</p>
              </div>
            </div>
          </div>

          <div className="donation-tiers">
            <h3>Certificate Tiers</h3>
            <div className="tiers-grid">
              <div className="tier silver">
                <div className="tier-badge">🥈 Silver</div>
                <div className="tier-amount">₹50 - ₹1,000</div>
                <div className="tier-title">Compassionate Supporter</div>
              </div>
              <div className="tier gold">
                <div className="tier-badge">🥇 Gold</div>
                <div className="tier-amount">₹1,001 - ₹10,000</div>
                <div className="tier-title">Generous Benefactor</div>
              </div>
              <div className="tier platinum">
                <div className="tier-badge">💎 Platinum</div>
                <div className="tier-amount">₹10,001 - ₹50,000</div>
                <div className="tier-title">Distinguished Philanthropist</div>
              </div>
            </div>
          </div>

          <div className="notify-section">
            <h3>Get Notified When Ready!</h3>
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

export default DonorFlow;
            
