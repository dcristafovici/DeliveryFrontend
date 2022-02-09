import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavigationItems } from '../../../../routes/routes';
import { RoutesNavigationTypes } from '../../../../routes/types';
import { HeaderNavigationStyled } from './HeaderNavigationStyled';

const HeaderNavigation:React.FC = () => (
  <HeaderNavigationStyled>
    <nav>
      <ul>
        {HeaderNavigationItems.map((item: RoutesNavigationTypes, index:number) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="header-phone">
      <a href="tel:+3736711-08-54">+373 (67) 11-08-54</a>
    </div>
  </HeaderNavigationStyled>
);

export default HeaderNavigation;
