import { CHANGE_POPUP_STATUS, SET_USER } from '../actions-types/authTypes';

export const changePopupStatus = (status:boolean) => (dispatch:any) => {
  dispatch({
    type: CHANGE_POPUP_STATUS,
    payload: { status },
  });
};

export const setUser = (token: string, user:any) => (dispatch:any) => {
  dispatch({
    type: SET_USER,
    payload: { token, user },
  });
};
