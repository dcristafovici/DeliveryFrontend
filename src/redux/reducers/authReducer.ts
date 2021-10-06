import { CHANGE_POPUP_STATUS, SET_USER } from '../actions-types/authTypes';

const initialState = {
  popupStatus: false,
  token: null,
  user: {
    name: '',
    phone: '',
    email: '',
    address: '',
    floor: '',
    office: '',
    apartment: '',
    tower: '',
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
    default: {
      return {
        ...state,
      };
    }
  }
};
