import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { FIND_BY_KEY_RES_CAT } from '../../GraphQL/RestaurantCategory/RestaurantCategory';
import ProductsPoint from './ProductsPoint';
import { ProductsPointInterface } from './ProductsPoint/ProductsPointInterface';

export const Products: React.FC = () => {
  const { id: restaurantID } = useParams<{ id: string }>();
  const { loading, data = {} } = useQuery(FIND_BY_KEY_RES_CAT, { variables: { data: { field: 'restaurant', value: restaurantID } } });
  const { findByKeyResCat = [] } = data;
  return (
    <>
      {
        !loading
        && findByKeyResCat.length
        && findByKeyResCat.map((item:ProductsPointInterface) => (
          <ProductsPoint key={item.category.id} category={item.category} />
        ))
      }
    </>
  );
};

export default Products;
