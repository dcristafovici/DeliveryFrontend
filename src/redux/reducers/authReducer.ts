import { CHANGE_POPUP_STATUS, MOBILE_ACCOUNT_STATUS, SET_USER, UPDATE_USER, SIGN_OUT } from '../actions-types/authTypes';

const initialState = {
  popupStatus: false,
  mobileAccount: false,
  token: null,
  user: {
    id: '',
    phone: '',
    name: '',
    email: '',
    floor: '',
    office: '',
    apartment: '',
  },
};

export const authReducer = (state = initialState, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: payload.status,
      };
    case SET_USER:
      return {
        ...state,
        token: payload.token,
        user: { ...state.user, ...payload.user },
      };
    case SIGN_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: {
          id: '',
          phone: '',
        },
      };
    case MOBILE_ACCOUNT_STATUS:
      return {
        ...state,
        mobileAccount: payload.status,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, [payload.field]: payload.value },
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
