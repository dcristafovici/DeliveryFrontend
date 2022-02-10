import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductsItems from '../ProductsItems';
import { ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled } from './ProductsPointStyled';

const ProductsPoint:React.FC<ProductsPointInterface> = ({ category }: ProductsPointInterface) => {
  const [render, setRender] = useState<boolean>(false);
  const { ref, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setRender(true);
    }
  }, [entry?.isIntersecting]);

  return (
    <ProductsPointStyled>
      <div className="products-point__title" ref={ref}>
        {category.name}
      </div>
      {render && (
        <ProductsItems categoryID={category.id} />
      )}
    </ProductsPointStyled>
  );
};

export default ProductsPoint;
