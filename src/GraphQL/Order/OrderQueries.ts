import { gql } from '@apollo/client';

export const FIND_ORDERS_BY_KEYS = gql`
  query findByKeyOrders($data: FindByKeyInput!) {
    findByKeyOrders(data: $data) {
      id,
      day,
      time,
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
