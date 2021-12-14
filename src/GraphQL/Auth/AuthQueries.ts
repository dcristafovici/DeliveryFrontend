import { gql } from '@apollo/client';

export const TOKEN_IS_VALID = gql`
  query tokenIsValid($token: String!){
    tokenIsValid(token: $token){
      id,
      phone,
      iat
    }
  }
`;
