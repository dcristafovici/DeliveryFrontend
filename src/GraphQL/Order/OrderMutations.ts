import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrder($data: AddOrderInput!){
    createOrder(data: $data){
      orderNumber,
      orderCustomer{
        name
      }
      orderPayment {
        confirmation_url
      }
    }
  }
`;

export const UPDATE_PAYMENT_STATUS = gql`
  mutation updatePaymentStatus($data: UpdatePaymentStatusDTO!) {
    updatePaymentStatus(data: $data)
  }
`;
