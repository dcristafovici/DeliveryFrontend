import { OPEN_POPUP, CLOSE_POPUP } from '../actions-types/showTypes';
import { IShow } from '../types/showReducerInterface';

const initialState: IShow = {
  isOpened: false,
  openedID: null,
};

export const showReducer = (state = initialState, action:any) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_POPUP:
      return {
        ...state,
        isOpened: true,
        openedID: payload,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isOpened: false,
        openedID: null,
      };
    default: {
      return state;
    }
  }
};
