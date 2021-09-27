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
