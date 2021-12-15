import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../Popup';
import AuthPopup from '../../Popup/AuthPopup';
import Overlay from '../../Popup/Overlay/Overlay';
import Button from '../Button';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => {
  const [authentication, setAuthentication] = useState(false);
  return (
    <HeaderStyled>
      <ContainerStyled className="container-styled">
        <StyledFlex align="center" justify="space-between">

          <div className="header-logo">
            <Link to="/">
              Logo
            </Link>
          </div>

          <div className="header-account">
            <Button
              disabled={false}
              name="Sign In"
              className="transparent"
              onClickEvent={() => setAuthentication(true)}
            />
            {authentication && (
              <Popup>
                <Overlay onClickEvent={() => setAuthentication(false)} />
                <AuthPopup />
              </Popup>
            )}
          </div>

        </StyledFlex>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
