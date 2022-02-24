import { SET_USER_DATA } from '../actions-types/userTypes';
import { IUser } from '../types/userReducerInterface';

export const setUserData = (user: IUser) => (dispatch:any) => {
  dispatch({
    type: SET_USER_DATA,
    payload: { ...user, authorized: true },
  });
};
