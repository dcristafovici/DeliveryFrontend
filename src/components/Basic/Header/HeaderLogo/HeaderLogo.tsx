import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoStyled } from './HeaderLogoStyled';

const HeaderLogo:React.FC = () => (
  <HeaderLogoStyled>
    <Link to="/">
      Logo
    </Link>
  </HeaderLogoStyled>
);

export default HeaderLogo;
