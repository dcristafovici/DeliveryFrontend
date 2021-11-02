import React from 'react';
import { useDispatch } from 'react-redux';
import { changePopupStatus } from '../../../redux/actions/authAction';
import { showPopup } from '../../../redux/actions/popupAction';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import { OverlayStyled } from '../../Checkout/CheckoutStyled';
import Button from '../Button';
import { PopupStyled } from './PopupStyled';

const Popup:React.FC = () => {
  const { statusPopup, textPopup } = useTypeSelector((state) => state.popupReducer);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(showPopup(false, ''));
    dispatch(changePopupStatus(true));
  };

  return (
    <>
      {statusPopup && (
        <>
          <OverlayStyled onClick={() => dispatch(showPopup(false, ''))} />
          <PopupStyled>
            <div className="popup-title">Please sing in</div>
            <div className="popup-text">{textPopup}</div>
            <div className="popup-button">
              <Button disabled={false} name="Sign in" onClickEvent={onClickHandler} />
            </div>
          </PopupStyled>
        </>
      )}
    </>
  );
};

export default Popup;
