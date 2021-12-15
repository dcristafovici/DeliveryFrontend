import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheckoutStatus } from '../../../redux/actions/asideAction';
import { useTypeSelector } from '../../../redux/reduxHooks';
import Button from '../../Basic/Button';
import { AsideSummaryStyled } from './AsideSummaryStyled';

const AsideSummary:React.FC = () => {
  const { deliveryTime = '', total = 0, minPrice } = useTypeSelector((state) => state.asideReducer);
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
          <span>{`${total} $`}</span>
        </div>
      </div>
      <Button disabled={total < minPrice} name="Checkout" onClickEvent={() => dispatch(setCheckoutStatus(true))} className="full" />
    </AsideSummaryStyled>
  );
};

export default AsideSummary;
