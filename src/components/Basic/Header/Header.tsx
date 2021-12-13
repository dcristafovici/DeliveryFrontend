import React from 'react';
import { Link } from 'react-router-dom';
import AuthPopup from '../../Popup/AuthPopup';
import Button from '../Button';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => (
  <HeaderStyled>
    <ContainerStyled className="container-styled">
      <StyledFlex align="center" justify="space-between">

        <div className="header-logo">
          <Link to="/">
            Logo
          </Link>
        </div>
        <div
          className="header-account"
          role="button"
          tabIndex={0}
        >
          <Button disabled={false} name="Sign In" className="transparent" />
          <AuthPopup />
        </div>
      </StyledFlex>
    </ContainerStyled>
  </HeaderStyled>
);

export default Header;
