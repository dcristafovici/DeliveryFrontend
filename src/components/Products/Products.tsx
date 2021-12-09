import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { FIND_BY_KEY_PRODUCTS } from '../../GraphQL/Product/ProductQueries';
import ProductsPoint from './ProductsPoint/ProductsPoint';
import {
  CategoryInterface,
  CategoryWrapperInterface,
  ProductPointObject,
  ProductsComponentInterface,
} from './ProductsPoint/ProductsPointInterface';
import { ProductsStyled } from './ProductsStyled';

const Products:React.FC<ProductsComponentInterface> = (
  { categories = [] }: ProductsComponentInterface,
) => {
  const { id } = useParams<{ id: string }>();
  const { data = {} } = useQuery(FIND_BY_KEY_PRODUCTS, { variables: { data: { field: 'restaurant', value: id } } });
  const { findByKeyProducts = [] } = data;
  console.log(findByKeyProducts);

  return (
    <ProductsStyled>
      {categories.map(({ category }: CategoryWrapperInterface, index:number) => {
        const prods = findByKeyProducts.filter((product:ProductPointObject) => (
          product.categories.some((cat: CategoryInterface) => cat.id === category.id)
            ? product : false));
        return (
          <ProductsPoint
            key={category.id}
            nextCategory={categories[index + 1]}
            category={category}
            products={prods}
          />
        );
      })}
    </ProductsStyled>
  );
};

export default Products;
