import { gql } from '@apollo/client';

export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantFields on Restaurant {
    id,
    name,
    description,
    minPrice,
    deliveryTime,
    rating,
    media {
      medium,
      mediumLarge,
      large
    }
  }
`;
