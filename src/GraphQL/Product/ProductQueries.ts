import { gql } from '@apollo/client';

export const FIND_BY_KEY_PRODUCTS = gql`
  query findByKeyProducts($data: FindByKeyInput!){
    findByKeyProducts(data: $data) {
      id,
      name,
      description,
      price,
      weight,
      categories {
        id
      }
      media {
        medium
      }
    }
  }
`;
