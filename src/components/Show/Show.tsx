import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../redux/actions/showAction';
import { useTypeSelector } from '../../redux/reduxHooks';
import Checkout from '../Aside/Checkout';
import AuthPopup from '../Popup/AuthPopup';
import { OverlayStyled, ShowStyled } from './ShowStyled';

const Show:React.FC = () => {
  const dispatch = useDispatch();
  const { isOpened } = useTypeSelector((state) => state.showReducer);
  return (
    <>
      {isOpened && (
        <>
          <OverlayStyled onClick={() => dispatch(closePopup())} />
          <ShowStyled>
            <AuthPopup onClose={() => 'onclose'} />
            <Checkout />
          </ShowStyled>
        </>
      )}
    </>
  );
};

export default Show;
