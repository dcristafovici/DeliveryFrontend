import React from 'react';
import Products from '../../Products/Products';
import RestaurantInfo from '../RestaurantInfo';

const RestaurantWrapper:React.FC = () => (
  <>
    <RestaurantInfo />
    <Products />
  </>
);

export default RestaurantWrapper;
