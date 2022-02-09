import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoStyled } from './HeaderLogoStyled';
import { LogoIcon } from '../../Icons';

const HeaderLogo:React.FC = () => (
  <HeaderLogoStyled>
    <Link to="/">
      <LogoIcon />
    </Link>
  </HeaderLogoStyled>
);

export default HeaderLogo;
