import { gql } from '@apollo/client';

export const FIND_ORDERS_BY_KEYS = gql`
  query findByKeyOrders($data: FindByKeyInput!) {
    findByKeyOrders(data: $data) {
      id,
      day,
      time,
      status,
      restaurant{
        name,
        rating
      }
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
      created_at
    }
  }
`;
