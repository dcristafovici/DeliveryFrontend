import React from 'react';
import './Header.sass';

const Header:React.FC = () => (
  <header className="header">
    <div className="content">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="header-logo">
            <a href="index.html" className="logo">
              <img src="/images/header/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="header-nav">
            <nav className="menu">
              <ul>
                <li className="active">
                  <a href="/">For Restaurants</a>
                </li>
                <li>
                  <a href="/">For Companies</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-right">
          <div className="header-languages">
            <ul>
              <li className="active">
                <a href="/">RU</a>
              </li>
              <li>
                <a href="/">ENG</a>
              </li>
            </ul>
          </div>
          <div className="header-auth">
            <a href="/" data-text="Sign In" className="button button-transparent"><span>Sign In </span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
