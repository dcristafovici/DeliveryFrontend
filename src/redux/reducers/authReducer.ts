import { CHANGE_POPUP_STATUS } from '../actions-types/authTypes';

const initialState = {
  popupStatus: false,
};

export const authReducer = (state = initialState, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: payload.status,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
