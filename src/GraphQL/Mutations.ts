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
      id,
      phone,
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data: $data) 
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($data: AddOrderInput!) {
    CreateOrder(data: $data)
  }
`;
