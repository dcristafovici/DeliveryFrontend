import { SET_CATEGORY_VISIBLE } from '../actions-types/restaurantTypes';

const initialState = {
  categoryVisible: '',
};

export const restaurantReducer = (state = initialState, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_CATEGORY_VISIBLE:
      return {
        ...state,
        categoryVisible: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
