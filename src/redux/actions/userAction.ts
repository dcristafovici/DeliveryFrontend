import { SET_USER_DATA, SET_USER_ADDRESS } from '../actions-types/userTypes';
import { IUser, IAddress } from '../types/userReducerInterface';

export const setUserData = (user: IUser) => (dispatch:any) => {
  dispatch({
    type: SET_USER_DATA,
    payload: user,
  });
};

export const setUserAddress = (address: IAddress) => (dispatch: any) => {
  dispatch({
    type: SET_USER_ADDRESS,
    payload: address,
  });
};
