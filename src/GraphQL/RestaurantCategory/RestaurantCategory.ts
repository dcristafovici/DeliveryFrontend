import { gql } from '@apollo/client';

export const FIND_BY_KEY_RESTAURANT_CATEGORIES = gql`
  query findByKeyRestaurantCategory($data: FindByKeyInput!){
    findByKeyRestaurantCategory(data: $data) {
      category{
        id,
        name
      }
    }
  }
`;
