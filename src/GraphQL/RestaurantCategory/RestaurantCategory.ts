import { gql } from '@apollo/client';

export const FIND_BY_KEY_RES_CAT = gql`
  query findByKeyResCat($data: FindByKeyInput!){
    findByKeyResCat(data: $data) {
      category{
        id,
        name
      }
    }
  }
`;
