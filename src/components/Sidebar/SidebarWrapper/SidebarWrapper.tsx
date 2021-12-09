import React from 'react';
import Sidebar from '../Sidebar';
import { SidebarWrapperStyled } from './SidebarWrapperStyled';

const SidebarWrapper:React.FC = () => (
  <SidebarWrapperStyled className="show-mobile">
    <Sidebar />
  </SidebarWrapperStyled>
);

export default SidebarWrapper;
