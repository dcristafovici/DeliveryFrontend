import React from 'react';
import { useDispatch } from 'react-redux';
import { AccountIcon } from '../../Basic/Icons';
import { AccountBarStyled } from './AccountBarStyled';

const AccountBar:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <AccountBarStyled>
      <AccountIcon />
      <span>Account</span>
    </AccountBarStyled>
  );
};

export default AccountBar;
