import { gql } from '@apollo/client';

export const FIND_POSSIBLE_ADDRESSES = gql`
  query findPossibleAddresses($address: String!) {
    findPossibleAddresses(address: $address) {
      value,
      data{
        postal_code,
        geo_lat,
        geo_lon
      }
    }
  }
`;
