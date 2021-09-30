import React from 'react';
import Authentication from '../../Authentication/Authentication';
import Button from '../Button';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => (
  <HeaderStyled>
    <ContainerStyled className="container-styled">
      <StyledFlex align="center" justify="space-between">

        <div className="header-logo">
          logo
        </div>

        <div className="header-navigation">
          <ul>
            <li><a href="/1">Restaurants</a></li>
            <li><a href="/2">Companies</a></li>
            <li><a href="/3">Discounts</a></li>
          </ul>
        </div>

        <div className="header-phone">
          <a href="tel:+1 (985) 766-49-62">+1 (985) 766-49-62</a>
        </div>

        <div className="header-status">
          Online
        </div>

        <div className="header-account">
          <Button disabled={false} name="Sign In" className="transparent" />
        </div>

      </StyledFlex>
    </ContainerStyled>
    <Authentication />
  </HeaderStyled>
);

export default Header;
