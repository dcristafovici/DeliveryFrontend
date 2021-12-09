import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCardInterface } from '../RestaurantsInterface';
import { RestaurantCardStyled } from './RestaurantCardStyled';

const RestaurantCard:React.FC<RestaurantCardInterface> = (
  { id, name, minPrice, deliveryTime, rating, media }: RestaurantCardInterface,
) => (
  <RestaurantCardStyled>
    <Link to={{ pathname: `restaurant/${id}` }}>
      <div className="restaurant-card__top">
        <div className="card-top__photo">
          <img src={`http://localhost:5000/${media.mediumLarge}`} alt={name} />
        </div>
        <div className="card-top__info">
          <div className="card-top__time card-top__item">{deliveryTime}</div>
        </div>
      </div>
      <div className="restaurant-card__bottom">
        <div className="card-bottom__name">
          {name}
        </div>
        <div className="card-bottom__row">
          <div className="card-bottom__rating">{rating}</div>
          <div className="card-bottom__price">
            {`${minPrice} $`}
          </div>
        </div>
      </div>
    </Link>
  </RestaurantCardStyled>
);

export default RestaurantCard;
