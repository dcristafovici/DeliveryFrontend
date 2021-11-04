import React from 'react';
import { useDispatch } from 'react-redux';
import { mobileAccountStatus } from '../../../redux/actions/authAction';
import { AccountIcon } from '../../Basic/Icons';
import { AccountBarStyled } from './AccountBarStyled';

const AccountBar:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <AccountBarStyled onClick={() => dispatch(mobileAccountStatus(true))}>
      <AccountIcon />
      <span>Account</span>
    </AccountBarStyled>
  );
};

export default AccountBar;
