import React from 'react';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import HeaderAccount from './HeaderAccount/HeaderAccount';
import HeaderLanguage from './HeaderLanguage';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => (
  <HeaderStyled>
    <ContainerStyled className="container-styled">
      <StyledFlex align="center" justify="space-between">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderLanguage />
        <HeaderAccount />
      </StyledFlex>
    </ContainerStyled>
  </HeaderStyled>
);
export default Header;
