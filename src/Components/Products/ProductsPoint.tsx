import React from 'react';
import ProductsItem from './ProductsItem';

interface ProductPointInterface {
  name: string;
}

const ProductsPoint:React.FC<ProductPointInterface> = (props:ProductPointInterface) => {
  const { name } = props;
  return (
    <div className="products-point">
      <div className="products-title">
        <h2>{name}</h2>
      </div>
      <div className="products-items">
        <ProductsItem name="1" description="2" price="3" />
      </div>
    </div>
  );
};
export default ProductsPoint;
