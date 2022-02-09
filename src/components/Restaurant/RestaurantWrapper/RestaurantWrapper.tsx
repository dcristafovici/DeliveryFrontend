import React from 'react';
import Products from '../../Products/Products';
import RestaurantInfo from '../RestaurantInfo';

const RestaurantWrapper:React.FC = () => {
  console.log('Restaurant wrapper componet');
  return (
    <>
      <RestaurantInfo />
      <Products />
    </>
  );
};

export default RestaurantWrapper;
