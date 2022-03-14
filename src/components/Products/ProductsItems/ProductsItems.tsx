import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { FIND_BY_REST_CAT_COMB } from '../../../GraphQL/Product/ProductQueries';
import { useTypeSelector } from '../../../redux/reduxHooks';
import ProductCard from '../ProductCard';
import { ProductCardInterface } from '../ProductCard/ProductCardInterface';
import { ProductsItemsInterface } from './ProductsItemsInterface';
import { ProductsItemsStyled } from './ProductsItemsStyled';

const ProductsItems:React.FC<ProductsItemsInterface> = ({ categoryID }: ProductsItemsInterface) => {
  const { id: restaurantID } = useParams<{ id: string }>();
  const { loading, data = {} } = useQuery(
    FIND_BY_REST_CAT_COMB,
    { variables: { data: { restaurant: restaurantID, category: categoryID } } },
  );
  const { findByResCatCombProducts: productsItems = [] } = data;
  const { authorized } = useTypeSelector((state) => state.userReducer);
  return (
    <ProductsItemsStyled>
      {
        !loading
        && productsItems.length
        && productsItems.map((product: ProductCardInterface, index:number) => (
          <ProductCard key={index} authorized={authorized} product={product} />
        ))
      }
    </ProductsItemsStyled>
  );
};

export default ProductsItems;
