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

export const FIND_BY_REST_CAT_COMB = gql`
  query findByResCatCombProducts($data: FindByResCatCombInput!) {
    findByResCatCombProducts(data: $data){
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
