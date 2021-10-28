import { SET_CATEGORY_VISIBLE, SET_CATEGORY_CLICKED } from '../actions-types/restaurantTypes';

export const setCategoryVisible = (id:string) => (dispatch:any) => {
  dispatch({
    type: SET_CATEGORY_VISIBLE,
    payload: id,
  });
};

export const setCategoryClicked = (id:string) => (dispatch:any) => {
  dispatch({
    type: SET_CATEGORY_CLICKED,
    payload: id,
  });
};
