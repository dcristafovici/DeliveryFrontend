import { gql } from '@apollo/client';

export const CREATE_OTP = gql`
  mutation createOTP($data: AddOtpInput!) {
    createOTP(data: $data) 
  }
`;
export const AUTHENTICATION_USER = gql`
  mutation authenticationUser($data: CheckOtpInput!) {
    authenticationUser(data: $data)
  }
`;
