import { gql } from '@apollo/client';

export const CREATE_OTP = gql`
  mutation createOTP($data: CreateOTPInput!) {
    createOTP(data: $data) 
  }
`;
export const AUTHENTICATION_USER = gql`
  mutation authenticationUser($data: AuthenticationInput!) {
    authenticationUser(data: $data)
  }
`;
