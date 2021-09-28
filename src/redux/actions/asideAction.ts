import { ADD_PRODUCT, CLEAR_ASIDE } from '../actions-types/asideTypes';

export const addProduct = (
  id:string,
  name: string,
  price: string,
  weight: string,
) => (dispatch:any) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { id, name, price, weight },
  });
};

export const clearAside = () => (dispatch:any) => {
  dispatch({
    type: CLEAR_ASIDE,
    payload: true,
  });
};
