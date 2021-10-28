import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCategoryVisible } from '../../../redux/actions/restaurantAction';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductPointObject, ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';
import { ProductsPlaceholder } from '../ProductsPlaceholder';

const ProductsPoint:React.FC<ProductsPointInterface> = (
  { products = ProductsPlaceholder, category, nextCategory }: ProductsPointInterface,
) => {
  const { ref, inView, entry } = useInView({ initialInView: false, threshold: 0.07 });
  const dispatch = useDispatch();

  const [initial, setInitial] = useState({
    previousY: 0,
    previousRatio: 0,
  });

  const [prods, setProds] = useState<ProductPointObject[]>(ProductsPlaceholder);

  useEffect(() => {
    if (products.length && inView) {
      setProds(products);
    }
  }, [products, inView]);

  useEffect(() => {
    if (entry) {
      const currentY = entry!.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      let direction = 0;
      if (currentY < initial.previousY) {
        direction = 1;
      } else {
        direction = -1;
      }
      setInitial({ previousY: currentY, previousRatio: currentRatio });
      /* Scroll down */
      if (!inView && direction === 1) {
        dispatch(setCategoryVisible(nextCategory.category.id));
      }
      /* Scroll Up */
      if (inView && direction === -1) {
        dispatch(setCategoryVisible(category.id));
      }
    }
  }, [inView]);
  return (
    <ProductsPointStyled ref={ref}>
      <div className="products-point__category">
        { category.name }
      </div>
      <ProductsItemsStyled>
        {prods.map((product:ProductPointObject) => (
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
