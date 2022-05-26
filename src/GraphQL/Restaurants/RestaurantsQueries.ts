import { gql } from '@apollo/client';
import { RESTAURANT_FRAGMENT } from './RestaurantFragment';

export const FIND_RESTAURANTS = gql`
  ${RESTAURANT_FRAGMENT}
  query findRestaurants($data: GraphQLGeneralRequest!) {
    findRestaurants(data: $data) {
      list {
        ...RestaurantFields
      }
      page,
      pageSize,
      count
    }
  }
`;

export const FIND_ONE_RESTAURANT = gql`
  ${RESTAURANT_FRAGMENT}
  query findOneRestaurant($id: String!) {
    findOneRestaurant(id: $id){
      ...RestaurantFields
    }
  } 
`;
