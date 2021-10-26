import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCategoryVisible } from '../../../redux/actions/restaurantAction';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductPointObject, ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';

const ProductsPoint:React.FC<ProductsPointInterface> = (
  { products = [], category }: ProductsPointInterface,
) => {
  const { ref, inView, entry } = useInView();
  const { ref: ref2, inView: inView2, entry: entry2 } = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <ProductsPointStyled ref={ref}>
      <div className="products-point__category" ref={ref2}>
        { category.name }
        { category.id }
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
};

export default ProductsPoint;
