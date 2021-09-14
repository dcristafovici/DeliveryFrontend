import React from 'react';
import RestaurantCard from '../RestaurantCard';
import { RestaurantItemsStyled } from './RestaurantsItemsStyled';

const RestaurantsItems:React.FC = () => (
  <RestaurantItemsStyled>
    <RestaurantCard />
  </RestaurantItemsStyled>
);

export default RestaurantsItems;
