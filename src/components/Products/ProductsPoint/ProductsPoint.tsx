import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCategoryVisible } from '../../../redux/actions/restaurantAction';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductPointObject, ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';
import { ProductsPlaceholder } from '../ProductsPlaceholder';
import { useTypeSelector } from '../../../redux/reduxHooks';

const ProductsPoint:React.FC<ProductsPointInterface> = (
  { products = ProductsPlaceholder, category, nextCategory }: ProductsPointInterface,
) => {
  const { ref, inView, entry } = useInView({ initialInView: false, threshold: 0.07 });
  const pointRef = useRef(null);

  const dispatch = useDispatch();

  const [initial, setInitial] = useState({
    previousY: 0,
    previousRatio: 0,
  });

  const { categoryClicked } = useTypeSelector((state) => state.restaurantReducer);

  const [productsRender, setProductsRender] = useState<ProductPointObject[]>(ProductsPlaceholder);

  useEffect(() => {
    if (products.length && inView) {
      setProductsRender(products);
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
  }, [products, inView]);

  useEffect(() => {
    if (categoryClicked === category.id) {
      entry?.target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [categoryClicked]);

  return (
    <ProductsPointStyled ref={ref} id={category.id}>
      <div className="products-point__category">
        { category.name }
      </div>
      <ProductsItemsStyled>
        {productsRender.map((product:ProductPointObject) => (
          <ProductsItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            weight={product.weight}
            categories={product.categories}
            media={product.media}
          />
        ))}
      </ProductsItemsStyled>
    </ProductsPointStyled>
  );
};

export default ProductsPoint;
