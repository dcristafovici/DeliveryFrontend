import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { PRODUCTS_BY_FIELD } from '../../GraphQL/Queries';
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
  const { data = {} } = useQuery(PRODUCTS_BY_FIELD, { variables: { data: { field: 'restaurant', value: id } } });
  const { ProductsByField: ProductsData = [] } = data;

  return (
    <ProductsStyled>
      {categories.map(({ category }: CategoryWrapperInterface, index:number) => {
        const prods = ProductsData.filter((product:ProductPointObject) => (
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
