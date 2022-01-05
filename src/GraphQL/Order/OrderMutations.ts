import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrder($data: AddOrderInput!){
    createOrder(data: $data){
      orderNumber,
      orderCustomer{
        name
      }
    }
  }
`;
