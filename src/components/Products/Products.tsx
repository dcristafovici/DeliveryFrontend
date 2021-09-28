import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { PRODUCTS_BY_FIELD } from '../../GraphQL/Queries';
import ProductsPoint from './ProductsPoint/ProductsPoint';
import { ProductPointObject } from './ProductsPoint/ProductsPointInterface';
import { ProductsStyled } from './ProductsStyled';

const Products:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data = {} } = useQuery(PRODUCTS_BY_FIELD, { variables: { data: { field: 'restaurant', value: id } } });
  const { ProductsByField: ProductsData = [] } = data;

  const stucturedProducts = ProductsData.reduce((row:any, product:ProductPointObject) => {
    row[product.category.id] = [...row[product.category.id] || [], product];
    return row;
  }, {});

  return (
    <ProductsStyled>
      {Object.values(stucturedProducts).map((item:any, index:number) => (
        <ProductsPoint key={index} products={item} />
      ))}
    </ProductsStyled>
  );
};

export default Products;
