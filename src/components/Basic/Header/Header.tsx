import React from 'react';
import { useDispatch } from 'react-redux';
import { changePopupStatus } from '../../../redux/actions/authAction';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import Authentication from '../../Authentication/Authentication';
import Button from '../Button';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => {
  const { popupStatus } = useTypeSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
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

          <div
            className="header-account"
            role="button"
            tabIndex={0}
            onClick={() => dispatch(changePopupStatus(true))}
          >
            <Button disabled={false} name="Sign In" className="transparent" />
          </div>

        </StyledFlex>
      </ContainerStyled>
      {popupStatus && <Authentication />}
    </HeaderStyled>
  );
};

export default Header;
