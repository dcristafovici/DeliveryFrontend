import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions/asideAction';
import { ProductPointObject } from '../ProductsPoint/ProductsPointInterface';
import { ProductsItemStyled } from './ProductsItemStyled';

const ProductsItem:React.FC<ProductPointObject> = (
  { id, name, weight, description, price, image }: ProductPointObject,
) => {
  const dispatch = useDispatch();
  return (
    <ProductsItemStyled onClick={() => dispatch(addProduct(id, name, price, weight))}>
      <div className="products-item__photo">
        <img src={`http://localhost:5000/${image.medium}`} alt="Product" />
      </div>
      <div className="products-item__content">
        <div className="products-item__name">{name}</div>
        <div className="products-item__price">{price}</div>
        <div className="products-item__description">{description}</div>
      </div>
    </ProductsItemStyled>
  );
};

export default ProductsItem;
