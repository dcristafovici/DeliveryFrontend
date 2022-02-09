import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { FIND_ONE_RESTAURANT } from '../../../GraphQL/Restaurants/RestaurantsQueries';
import { serverPath } from '../../../utils/envMode';
import { RestaurantCardInterface } from '../../Restaurants/RestaurantCard/RestaurantCardInterface';
import { RestaurantInfoStyled } from './RestaurantInfoStyled';
import { setAsideData } from '../../../redux/actions/asideAction';

const RestaurantInfo:React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data = {} } = useQuery(FIND_ONE_RESTAURANT, { variables: { id } });
  const { findOneRestaurant = [] } = data;
  const { name, minPrice, deliveryTime, media }: RestaurantCardInterface = findOneRestaurant;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && findOneRestaurant) dispatch(setAsideData({ minPrice, deliveryTime }));
  }, [loading]);

  return (
    <RestaurantInfoStyled className={loading ? 'loading' : ''}>
      <div className="restaurant-info__photo">
        {media && media.large && (
          <img src={`${serverPath}/${media?.large}`} alt={name} />
        )}
      </div>
      <div className="restaurant-info__content">
        <div className="restaurant-content__name">
          {name}
        </div>
        <div className="restaurant-content__bottom">
          <div className="restaurant-content__price">{`${minPrice} $`}</div>
          <div className="restaurant-content__time">{deliveryTime}</div>
          <div className="restaurant-content__link">Information about restaurant</div>
        </div>
      </div>
    </RestaurantInfoStyled>
  );
};

export default RestaurantInfo;
