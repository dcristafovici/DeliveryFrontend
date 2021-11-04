import { CHANGE_POPUP_STATUS, SET_USER, SIGN_OUT, MOBILE_ACCOUNT_STATUS } from '../actions-types/authTypes';

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

export const signOut = () => (dispatch:any) => {
  dispatch({
    type: SIGN_OUT,
  });
};

export const mobileAccountStatus = (status: boolean) => (dispatch:any) => {
  if (status) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  dispatch({
    type: MOBILE_ACCOUNT_STATUS,
    payload: { status },
  });
};
