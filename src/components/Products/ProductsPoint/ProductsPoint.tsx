import React from 'react';
import { useDispatch } from 'react-redux';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductPointObject, ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';
import { addProduct } from '../../../redux/actions/asideAction';

const ProductsPoint:React.FC<ProductsPointInterface> = (
  { products = [], category = '' }: ProductsPointInterface,
) => (
  <ProductsPointStyled>
    <div className="products-point__category">
      { category }
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
          categories={product.categories}
          image={product.image}
        />
      ))}
    </ProductsItemsStyled>

  </ProductsPointStyled>
);

export default ProductsPoint;
