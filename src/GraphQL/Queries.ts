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

export const CHECK_TOKEN = gql`
  query CheckToken($token: String!) {
    CheckToken(token: $token) {
      id,
      name,
      phone,
      tower,
      floor,
      office,
      apartment
    }
  }
`;

export const GET_ORDERS_BY_USER = gql`
  query GetOrderByUser($user: String!){
    GetOrderByUser(user: $user){
      id,
      totalPrice,
      restaurant {
        name,
        rating
      }
      created_at,
    }
  }
`;

export const GET_CART = gql`
  query GetCart($orderID : String!){
    GetCart(orderID: $orderID){
      id,
      productID{
        name,
        weight,
        price,
        image{
          small
        }
      }
      quantity
    }
  }
`;
