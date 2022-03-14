import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { openPopup } from '../../../redux/actions/showAction';
import { useTypeSelector } from '../../../redux/reduxHooks';
import Button from '../../Basic/Button';
import { ShowControllEnum } from '../../Show/ShowControll/ShowControllEnum';
import { AsideSummaryStyled } from './AsideSummaryStyled';

const AsideSummary:React.FC = () => {
  const { deliveryTime = '', total = 0, minPrice } = useTypeSelector((state) => state.asideReducer);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  return (
    <AsideSummaryStyled>
      <div className="aside-summary__items">
        <div className="aside-summary__item">
          <span>Delivery Time</span>
          <span>{deliveryTime}</span>
        </div>
        <div className="aside-summary__item">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
      <Button
        disabled={total < minPrice}
        onClickEvent={() => dispatch(openPopup(ShowControllEnum.CHECKOUT, { restaurantID: id }))}
        name="Checkout"
        className="full"
      />
    </AsideSummaryStyled>
  );
};

export default AsideSummary;
