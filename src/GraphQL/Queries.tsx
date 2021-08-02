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

export const RESTAURANT = gql`
  query Restaurant($id: String!){
    Restaurant(id: $id){
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

export const PRODUCTS = gql`
  query Products{
    Products{
      id,
      name,
      description,
      price,
      category
    }
  }
`;
