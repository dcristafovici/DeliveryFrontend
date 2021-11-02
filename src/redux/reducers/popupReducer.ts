import { CHANGE_POPUP } from '../actions-types/popupTypes';

const initialState = {
  statusPopup: false,
  textPopup: '',
};

export const popupReducer = (state = initialState, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_POPUP: {
      return {
        ...state,
        statusPopup: payload.status,
        textPopup: payload.text,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
