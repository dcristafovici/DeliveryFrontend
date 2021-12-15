import React from 'react';
import { useTypeSelector } from '../../../redux/reduxHooks';
import Aside from '../Aside';
import { AsideWrapperStyled } from './AsideWrapperStyled';

const AsideWrapper:React.FC = () => {
  const { status } = useTypeSelector((state) => state.asideReducer);
  return (
    <AsideWrapperStyled className={status ? 'aside-mobile__show' : ''}>
      <Aside />
    </AsideWrapperStyled>
  );
};

export default AsideWrapper;
