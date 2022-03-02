import { gql } from '@apollo/client';

export const FIND_ONE_ORDER = gql`
  query findOneOrder($id: String!) {
    findOneOrder(id: $id) {
      orderNumber,
      orderCustomer {
        name
      }
      orderPayment{
        id
      }
    }
  }
`;

export const FIND_ORDERS_BY_KEYS = gql`
  query findByKeyOrders($data: FindByKeyInput!) {
    findByKeyOrders(data: $data) {
      id,
      date,
      restaurant{
        name,
        rating
      }
      total,
      orderNumber,
      orderCart {
        quantity,
        product {
          id,
          name,
          price,
          media{
            small
          }
        }
      }
      orderPayment{
        status
      }
      created_at
    }
  }
`;
