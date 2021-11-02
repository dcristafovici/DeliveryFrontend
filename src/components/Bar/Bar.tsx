import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMobileAside } from '../../redux/actions/asideAction';
import { useTypeSelector } from '../../redux/useTypeSelector';
import { BarStyled, BarControllStyled } from './BarStyled';

const Bar:React.FC = () => {
  const { total, deliveryTime } = useTypeSelector((state) => state.asideReducer);
  const dispatch = useDispatch();
  return (
    <BarStyled>
      <BarControllStyled onClick={() => dispatch(changeMobileAside(true))}>
        <div className="bar-time">{deliveryTime}</div>
        <div className="bar-center">Order</div>
        <div className="bar-price">{`${total} $`}</div>
      </BarControllStyled>
    </BarStyled>
  );
};

export default Bar;
