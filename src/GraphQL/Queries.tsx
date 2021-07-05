import { gql } from '@apollo/client';

export const CATEGORIES = gql`
  query Categories{
    Categories{
      id,
      name,
      description
    }
  }
`