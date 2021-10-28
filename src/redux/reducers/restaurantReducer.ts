import { SET_CATEGORY_VISIBLE, SET_CATEGORY_CLICKED } from '../actions-types/restaurantTypes';

const initialState = {
  categoryVisible: '',
  categoryClicked: '',
};

export const restaurantReducer = (state = initialState, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_CATEGORY_VISIBLE:
      return {
        ...state,
        categoryVisible: payload,
      };
    case SET_CATEGORY_CLICKED:
      return {
        ...state,
        categoryClicked: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
