import React from 'react';
import './Footer.sass';

const Footer:React.FC = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-left__info">
            <a href="index.html" className="logo">
              <img src="/images/header/logo.svg" alt="Logo" />
            </a>
            <span>© Moscow City Guide</span>
          </div>
          <div className="footer-menu">
            <nav className="menu">
              <ul>
                <li>
                  <a href="/">About Moscow City </a>
                </li>
                <li>
                  <a href="/">Food and entertainment</a>
                </li>
                <li>
                  <a href="/">The property</a>
                </li>
                <li>
                  <a href="/">How to get?</a>
                </li>
                <li>
                  <a href="/">Towers</a>
                </li>
                <li>
                  <a href="/">News and afisha</a>
                </li>
                <li>
                  <a href="/">Companies</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
                <li>
                  <a href="/">Get Service</a>
                </li>
                <li>
                  <a href="/">For advertising  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-jobs">
            <strong>Do you want to work with us?</strong>
            <p>
              We will be glad to see you
              <br />
              among our partners
            </p>
            <a href="/" className="button"><span>Become a partner</span></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-phone">
            <a href="tel:8 495 974-55-36">
              8 495
              <span>974-55-36 </span>
            </a>
          </div>
          <div className="footer-mail">
            <a href="mailto:welcome@moscow-city.guide">welcome@moscow-city.guide</a>
          </div>
          <div className="footer-policy">
            <a href="/">Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
