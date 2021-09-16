import { SET_TOWER } from '../actions-types/towerTypes';

const initialState = {
  tower: '',
};

export const towerReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_TOWER:
      return {
        ...state,
        tower: action.payload,
      };
    default:
      return state;
  }
};
