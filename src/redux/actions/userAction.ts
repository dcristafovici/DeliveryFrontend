import { SET_USER } from '../actions-types/userTypes';

export const setUser = (user:string) => (dispatch:any) => {
  dispatch({
    type: SET_USER,
    payload: { user },
  });
};
