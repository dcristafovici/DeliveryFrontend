import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePercent } from '../../../redux/actions/asideAction';
import { AsideLineInterface } from '../AsideInterface';
import { AsideLineStyled } from './AsideLineStyled';

const AsideLine:React.FC<AsideLineInterface> = (
  { minPrice, total, percent }: AsideLineInterface,
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const calculatedPercent = (total / minPrice) * 100;
    dispatch(updatePercent(calculatedPercent <= 100 ? calculatedPercent : 100));
  }, [total, minPrice]);
  return (
    <AsideLineStyled>
      <div className="aside-line__summs">
        <span>{`${total} $`}</span>
        <span>{`${minPrice} $`}</span>
      </div>
      <div className="aside-line__line">
        <i style={{ width: `${percent}%` }} />
      </div>
      {percent < 100 && (
        <div className="aside-line__last">
          <span>
            For free delivery you need to purchase additional
            {`${minPrice - total} $`}
          </span>
        </div>
      )}
    </AsideLineStyled>
  );
};

export default AsideLine;
