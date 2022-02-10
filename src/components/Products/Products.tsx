import React from 'react';
import { CategoriesInterface } from '../Categories/CategoriesInterface';
import ProductsPoint from './ProductsPoint';
import { ProductsPointInterface } from './ProductsPoint/ProductsPointInterface';

export const Products:React.FC<CategoriesInterface> = ({ categories }: CategoriesInterface) => (
  <>
    {categories.length && categories.map((item:ProductsPointInterface) => (
      <ProductsPoint key={item.category.id} category={item.category} />
    ))}
  </>
);

export default Products;
