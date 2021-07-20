import { gql } from '@apollo/client';

export const CATEGORIES = gql`
  query Categories{
    Categories{
      id,
      name,
      description
    }
  }
`;

export const RESTAURANTS = gql`
  query allRestaurants{
    allRestaurants{
      id,
      name,
      description,
      minPrice,
      saleValue,
      deliveryTime,
      image
    }
  }
`;
