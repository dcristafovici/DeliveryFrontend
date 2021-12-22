import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../redux/reduxHooks';
import Button from '../../Basic/Button';
import Popup from '../../Popup';
import Overlay from '../../Popup/Overlay';
import Checkout from '../Checkout';
import { AsideSummaryStyled } from './AsideSummaryStyled';

const AsideSummary:React.FC = () => {
  const { deliveryTime = '', total = 0, minPrice } = useTypeSelector((state) => state.asideReducer);
  const [showCheckout, setShowCheckout] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
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
        <Button disabled={total < minPrice} onClickEvent={() => setShowCheckout(true)} name="Checkout" className="full" />
      </AsideSummaryStyled>
      {showCheckout && (
        <Popup>
          <Overlay onClickEvent={() => setShowCheckout(false)} />
          <Checkout />
        </Popup>
      )}
    </>
  );
};

export default AsideSummary;
