import React from 'react';
import { useDispatch } from 'react-redux';
import { serverPath } from '../../../utils/envMode';
import { ProductCardPropsInterface } from './ProductCardInterface';
import { ProductCardStyled } from './ProductCardStyled';
import placeholder from '../../../assets/img/placeholder.svg';
import { addProduct } from '../../../redux/actions/asideAction';

const ProductCard:React.FC<ProductCardPropsInterface> = (
  { product }: ProductCardPropsInterface,
) => {
  const { id, name, price, description, weight, media } = product;
  const dispatch = useDispatch();
  return (
    <ProductCardStyled onClick={() => dispatch(addProduct(id, name, price, weight))}>
      <div className={`product-card__photo ${(media && media.medium) ? '' : 'product-photo__placeholder'}`}>
        {(media && media.medium) ? (
          <img src={`${serverPath}/${media?.medium}`} alt="Product" />
        ) : (
          <img src={placeholder} alt="Product" />
        )}
      </div>
      <div className="product-card__content">
        <div className="product-card__name">{name}</div>
        <div className="product-card__price">{price}</div>
        <div className="product-card__description">{description}</div>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
