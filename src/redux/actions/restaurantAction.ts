import { SET_CATEGORY_VISIBLE } from '../actions-types/restaurantTypes';

export const setCategoryVisible = (id:string) => (dispatch:any) => {
  dispatch({
    type: SET_CATEGORY_VISIBLE,
    payload: id,
  });
};
