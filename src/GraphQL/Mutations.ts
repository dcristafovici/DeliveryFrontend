import { gql } from '@apollo/client';

export const SEND_PHONE = gql`
  mutation sendPhoneAndGetStatus($phone: String!) {
    sendPhoneAndGetStatus(phone: $phone) 
  }
`;
