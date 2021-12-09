import { gql } from '@apollo/client';

export const FIND_RESTAURANTS = gql`
  query findRestaurants{
  findRestaurants{
    id,
    name,
    description,
    minPrice,
    deliveryTime,
    rating,
    media {
      medium,
      mediumLarge,
      large
    }
  }
}
`;

export const FIND_ONE_RESTAURANT = gql`
  query findOneRestaurant($id: String!) {
    findOneRestaurant(id: $id){
      id,
      name,
      description,
      minPrice,
      deliveryTime,
      rating,
      media {
        medium
        mediumLarge,
        large
      }
    }
  } 
`;
