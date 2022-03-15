import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { FIND_BY_KEY_RES_CAT } from '../../../GraphQL/RestaurantCategory/RestaurantCategory';
import Categories from '../../Categories';
import Products from '../../Products/Products';
import RestaurantInfo from '../RestaurantInfo';

const RestaurantWrapper:React.FC = () => {
  const { id: restaurantID } = useParams<{ id: string }>();
  const { data = {} } = useQuery(FIND_BY_KEY_RES_CAT, { variables: { data: { field: 'restaurant', value: restaurantID } } });
  const { findByKeyResCat = [] } = data;
  return (
    <>
      <RestaurantInfo />
      <Categories categories={findByKeyResCat} />
      <Products categories={findByKeyResCat} />
    </>
  );
};

export default RestaurantWrapper;
