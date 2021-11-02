import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions/asideAction';
import { ProductPointObject } from '../ProductsPoint/ProductsPointInterface';
import { ProductsItemStyled } from './ProductsItemStyled';
import placeholder from '../../../assets/img/placeholder.svg';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import { showPopup } from '../../../redux/actions/popupAction';

const ProductsItem:React.FC<ProductPointObject> = (
  { id, name, weight, description, price, image }: ProductPointObject,
) => {
  const dispatch = useDispatch();
  const { user = {} } = useTypeSelector((state) => state.authReducer);
  const { id: userID } = user;

  const addProductHandler = () => {
    if (userID) {
      dispatch(addProduct(id, name, price, weight));
    } else {
      dispatch(showPopup(true, 'To add product you need to login on site'));
    }
  };
  return (
    <ProductsItemStyled onClick={addProductHandler}>
      <div className={`products-item__photo ${(image && image.medium) ? '' : 'product-photo__placeholder'}`}>
        {(image && image.medium) ? (
          <img src={`http://localhost:5000/${image?.medium}`} alt="Product" />
        ) : (
          <img src={placeholder} alt="Product" />
        )}
      </div>
      <div className="products-item__content">
        <div className="products-item__name">{name}</div>
        <div className="products-item__price">{`${price} $`}</div>
        <div className="products-item__description">{description}</div>
      </div>
    </ProductsItemStyled>
  );
};

export default ProductsItem;
