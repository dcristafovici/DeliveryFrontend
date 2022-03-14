import React from 'react';
import { useDispatch } from 'react-redux';
import { serverPath } from '../../../utils/envMode';
import { ProductCardPropsInterface } from './ProductCardInterface';
import { ProductCardStyled } from './ProductCardStyled';
import { addProduct } from '../../../redux/actions/asideAction';
import { openPopup } from '../../../redux/actions/showAction';
import { ShowControllEnum } from '../../Show/ShowControll/ShowControllEnum';

const ProductCard:React.FC<ProductCardPropsInterface> = (
  { product, authorized }: ProductCardPropsInterface,
) => {
  const { id, name, price, description, weight, media } = product;
  const dispatch = useDispatch();

  const onAddProduct = () => {
    if (authorized) {
      dispatch(addProduct(id, name, price, weight));
    } else {
      dispatch(openPopup(ShowControllEnum.INFO));
    }
  };

  return (
    <ProductCardStyled onClick={() => onAddProduct()}>
      <div className={`product-card__photo ${(media && media.medium) ? '' : 'product-photo__placeholder'}`}>
        {(media && media.medium) && (
          <img src={`${serverPath}/${media?.medium}`} alt="Product" />
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
