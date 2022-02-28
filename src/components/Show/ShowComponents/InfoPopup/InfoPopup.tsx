import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../../../redux/actions/showAction';
import Button from '../../../Basic/Button';
import { RestrictIcon } from '../../../Basic/Icons';
import { ShowControllEnum } from '../../ShowControll/ShowControllEnum';
import { InfoPopupStyled } from './InfoPopupStyled';

const InfoPopup:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <InfoPopupStyled>
      <div className="info-popup__icon">
        <RestrictIcon />
      </div>
      <div className="info-popup__title">You need to login</div>
      <div className="info-popup__paragraph">
        For doing this action you should be authorized
      </div>
      <div className="info-popup__button">
        <Button name="Authentication" onClickEvent={() => dispatch(openPopup(ShowControllEnum.AUTHENTICATION))} />
      </div>
    </InfoPopupStyled>
  );
};

export default InfoPopup;
