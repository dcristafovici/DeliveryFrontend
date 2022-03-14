import React from 'react';
import { CategoriesInterface } from '../Categories/CategoriesInterface';
import ProductsPoint from './ProductsPoint';
import { ProductsPointInterface } from './ProductsPoint/ProductsPointInterface';

export const Products:React.FC<CategoriesInterface> = ({ categories }: CategoriesInterface) => (
  <div className="products-wrapper">
    {categories.length && categories.map((item:ProductsPointInterface) => (
      <ProductsPoint key={item.category.id} category={item.category} />
    ))}
  </div>
);

export default Products;
