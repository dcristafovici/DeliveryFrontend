import { gql } from '@apollo/client';

export const RESTAURANTS = gql`
  query Restaurants {
    Restaurants {
      id,
      name,
      description,
      minPrice,
      deliveryTime,
      discount,
      rating
    }
  }
`;

export const RESTAURANT_BY_ID = gql`
  query RestuarantByID($id: String!) {
    RestaurantByID(id: $id) {
      id,
      name,
      description,
      minPrice,
      deliveryTime,
      discount,
      rating
    }
  }
`;

export const PRODUCTS_BY_FIELD = gql`
  query ProductsByField($data: FindByFieldInput!) {
    ProductsByField(data: $data){
      id,
      name,
      description,
      price,
      weight,
      category {
        id,
        name
      }
      image {
        medium
      }
    }
  }
`;
