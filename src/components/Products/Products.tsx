import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { GET_CATEGORY_BY_RESTAURANT, PRODUCTS_BY_FIELD } from '../../GraphQL/Queries';
import ProductsPoint from './ProductsPoint/ProductsPoint';
import { CategoryInterface, CategoryWrapperInterface, ProductPointObject } from './ProductsPoint/ProductsPointInterface';
import { ProductsStyled } from './ProductsStyled';

const Products:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data = {} } = useQuery(PRODUCTS_BY_FIELD, { variables: { data: { field: 'restaurant', value: id } } });
  const { data: CategoryData = {} } = useQuery(GET_CATEGORY_BY_RESTAURANT, { variables: { data: { field: 'restaurant', value: id } } });
  const { CategoryOrderfindByKey: Categories = [] } = CategoryData;
  const { ProductsByField: ProductsData = [] } = data;

  return (
    <ProductsStyled>
      {Categories.map(({ category }: CategoryWrapperInterface) => {
        const prods = ProductsData.filter((product:ProductPointObject) => (
          product.categories.some((cat: CategoryInterface) => cat.id === category.id)
            ? product : false));
        return (
          <ProductsPoint key={category.id} category={category.name} products={prods} />
        );
      })}
    </ProductsStyled>
  );
};

export default Products;
