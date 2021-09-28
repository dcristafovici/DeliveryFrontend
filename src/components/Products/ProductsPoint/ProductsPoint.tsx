import React from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductPointObject, ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';

const ProductsPoint:React.FC<ProductsPointInterface> = (
  { products = [] }: ProductsPointInterface,
) => (
  <ProductsPointStyled>
    <div className="products-point__category">
      {products[0].category.name}
    </div>
    <ProductsItemsStyled>
      {products.map((product:ProductPointObject) => (
        <ProductsItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          weight={product.weight}
          category={product.category}
          image={product.image}
        />
      ))}
    </ProductsItemsStyled>

  </ProductsPointStyled>
);

export default ProductsPoint;
