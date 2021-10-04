import { gql } from '@apollo/client';

export const SEND_PHONE = gql`
  mutation sendPhoneAndGetStatus($phone: String!) {
    sendPhoneAndGetStatus(phone: $phone) 
  }
`;

export const CHECK_CODE = gql`
  mutation checkCode($data : AddCodeInput!) {
    checkCode(data: $data)
  }
`;

export const ADD_USER = gql`
  mutation AddUser($data: AddUserInput!) {
    AddUser(data: $data){
      phone,
      token
    }
  }
`;
