import { gql } from '@apollo/client';

export const GET_INFORMATION_BY_TOKEN = gql`
  query getUserByToken($token: String!){
    getUserByToken(token: $token){
      id,
      phone,
      email,
      address,
      address_lat,
      address_lon
    }
  }
`;
