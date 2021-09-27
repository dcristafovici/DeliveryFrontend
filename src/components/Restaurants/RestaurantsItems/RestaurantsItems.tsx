import React from 'react';
import RestaurantCard from '../RestaurantCard';
import { RestaurantCardInterface, RestaurantItemsInterface } from '../RestaurantsInterface';
import { RestaurantItemsStyled } from './RestaurantsItemsStyled';

const RestaurantsItems:React.FC<RestaurantItemsInterface> = (
  { restaurants }: RestaurantItemsInterface,
) => (
  <RestaurantItemsStyled>
    {console.log(restaurants)}
    {restaurants.map((restaurant:RestaurantCardInterface) => (
      <RestaurantCard
        id={restaurant.id}
        name={restaurant.name}
        description={restaurant.description}
        minPrice={restaurant.minPrice}
        deliveryTime={restaurant.deliveryTime}
        discount={restaurant.discount}
        rating={restaurant.rating}
      />
    ))}
  </RestaurantItemsStyled>
);

export default RestaurantsItems;
