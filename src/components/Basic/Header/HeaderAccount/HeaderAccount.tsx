import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openPopup } from '../../../../redux/actions/showAction';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import { ShowControllEnum } from '../../../Show/ShowControll/ShowControllEnum';
import Button from '../../Button';
import { HeaderAccountStyled } from './HeaderAccountStyled';

const HeaderAccount:React.FC = () => {
  const { authorized } = useTypeSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <HeaderAccountStyled>
      {authorized ? (
        <Link to="/account/" className="auth-button">
          Account
        </Link>
      ) : (
        <Button
          disabled={false}
          name="Sign In"
          className="transparent"
          onClickEvent={() => dispatch(openPopup(ShowControllEnum.AUTHENTICATION))}
        />
      )}
    </HeaderAccountStyled>
  );
};

export default HeaderAccount;
