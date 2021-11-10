import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePopupStatus, signOut } from '../../../redux/actions/authAction';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import Authentication from '../../Authentication/Authentication';
import Button from '../Button';
import { ContainerStyled } from '../Container/ContainerStyled';
import { StyledFlex } from '../Flex/StyledFlex';
import { HeaderStyled } from './HeaderStyled';

const Header:React.FC = () => {
  const { popupStatus, user, token } = useTypeSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <HeaderStyled>
      <ContainerStyled className="container-styled">
        <StyledFlex align="center" justify="space-between">

          <div className="header-logo">
            <Link to="/">
              Logo
            </Link>
          </div>

          {/* <div className="header-phone">
            <a href="tel:+1 (985) 766-49-62">+1 (985) 766-49-62</a>
          </div> */}
          {token ? (
            <div className="header-right">
              <div className="header-personal">
                <Link to={`/account/${user.id}`}>
                  <Button name="Account" disabled={false} />
                </Link>
              </div>
              <div
                className="header-account"
                role="button"
                tabIndex={0}
                onClick={() => dispatch(signOut())}
              >
                <Button disabled={false} name="Sign Out" className="transparent" />
              </div>
            </div>
          ) : (
            <div
              className="header-account"
              role="button"
              tabIndex={0}
              onClick={() => dispatch(changePopupStatus(true))}
            >
              <Button disabled={false} name="Sign In" className="transparent" />
            </div>
          )}
        </StyledFlex>
      </ContainerStyled>
      {popupStatus && <Authentication />}
    </HeaderStyled>
  );
};

export default Header;
