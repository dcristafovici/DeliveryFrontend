import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavigationStyled } from './HeaderNavigationStyled';

const HeaderNavigation:React.FC = () => (
  <HeaderNavigationStyled>
    <nav>
      <ul>
        <li>
          <Link to="/information/restaurants/">For restaurants</Link>
        </li>
        <li>
          <Link to="/information/restaurants/">For companies</Link>
        </li>
        <li>
          <Link to="/information/promotions/">Promotions</Link>
        </li>
      </ul>
    </nav>
    <div className="header-phone">
      <a href="tel:+3736711-08-54">+373 (67) 11-08-54</a>
    </div>
  </HeaderNavigationStyled>
);

export default HeaderNavigation;
