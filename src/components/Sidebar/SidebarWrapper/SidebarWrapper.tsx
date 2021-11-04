import React from 'react';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import Sidebar from '../Sidebar';
import { SidebarWrapperStyled } from './SidebarWrapperStyled';

const SidebarWrapper:React.FC = () => {
  const { mobileAccount } = useTypeSelector((state) => state.authReducer);
  return (
    <SidebarWrapperStyled className={mobileAccount ? 'show-mobile' : ''}>
      <Sidebar />
    </SidebarWrapperStyled>
  );
};

export default SidebarWrapper;
