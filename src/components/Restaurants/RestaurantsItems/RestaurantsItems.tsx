import React from 'react';
import RestaurantCard from '../RestaurantCard';
import { RestaurantCardInterface, RestaurantItemsInterface } from '../RestaurantCard/RestaurantCardInterface';
import { RestaurantItemsStyled } from './RestaurantsItemsStyled';

const RestaurantsItems:React.FC<RestaurantItemsInterface> = (
  { restaurants }: RestaurantItemsInterface,
) => (
  <RestaurantItemsStyled>
    {restaurants.length && restaurants.map((restaurant:RestaurantCardInterface) => (
      <RestaurantCard
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        description={restaurant.description}
        minPrice={restaurant.minPrice}
        deliveryTime={restaurant.deliveryTime}
        rating={restaurant.rating}
        media={restaurant.media}
      />
    ))}
  </RestaurantItemsStyled>
);

export default RestaurantsItems;
