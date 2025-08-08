import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <h1>💕 Love Bite Foundation</h1>
          <p>Connecting Hearts, Changing Lives</p>
        </div>
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Love Bite Foundation</h1>
          <h2 className="subtitle">Empowering Couples Through Community Support</h2>
          <p className="description">Join our mission to help couples achieve their dreams through verified donations and transparent funding</p>
        </div>

        <div className="role-selection">
          <div className="role-cards-container">
            <div className="role-card donor-card" onClick={() => navigate('/donor')}>
              <div className="card-icon">❤️</div>
              <h2 className="card-title">I Want to Donate</h2>
              <p className="card-description">Help couples achieve their dreams and receive recognition certificates</p>
              
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🏆</span>
                  <span>Get Certificate of Recognition</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💰</span>
                  <span>₹50 - ₹50,000 donation range</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⭐</span>
                  <span>Silver, Gold & Platinum tiers</span>
                </div>
              </div>

              <button className="cta-button donor-button">Start Donating</button>
            </div>

            <div className="role-card recipient-card" onClick={() => navigate('/recipient')}>
              <div className="card-icon">🤝</div>
              <h2 className="card-title">I Need Funding</h2>
              <p className="card-description">Submit your application for financial assistance with KYC verification</p>
              
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">📋</span>
                  <span>Simple KYC process</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💳</span>
                  <span>Only 2% convenience fee</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Earn 1% referral commission</span>
                </div>
              </div>

              <button className="cta-button recipient-button">Apply for Funding</button>
            </div>
          </div>
        </div>

        <div className="trust-section">
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">₹50L+</div>
              <div className="stat-label">Total Donations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Couples</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Certificates Issued</div>
            </div>
          </div>
        </div>
      </main>

      <section id="how-it-works" className="how-it-works">
        <h2>How Love Bite Foundation Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Path</h3>
            <p>Select whether you want to donate or apply for funding</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Complete Process</h3>
            <p>Donors: Make payment | Recipients: Submit KYC</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Recognition</h3>
            <p>Donors: Receive certificates | Recipients: Get approved funds</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p
  
