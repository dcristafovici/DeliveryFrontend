import React from 'react';
import { AccountIcon } from '../../Basic/Icons';
import { AccountBarStyled } from './AccountBarStyled';

const AccountBar:React.FC = () => (
  <AccountBarStyled>
    <AccountIcon />
    <span>Account</span>
  </AccountBarStyled>
);

export default AccountBar;
