import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $data: UpdateUserInput!){
    updateUser(id: $id, data: $data)
  }
`;
