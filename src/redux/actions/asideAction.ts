import { ADD_PRODUCT, CLEAR_ASIDE, ADD_QUANTITY, SUB_QUANTITY, REMOVE_PRODUCT } from '../actions-types/asideTypes';

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

export const addQuantity = (id:string) => (dispatch:any) => {
  dispatch({
    type: ADD_QUANTITY,
    payload: { id },
  });
};

export const subQuantity = (id:string) => (dispatch:any) => {
  dispatch({
    type: SUB_QUANTITY,
    payload: { id },
  });
};

export const removeProduct = (id:string) => (dispatch:any) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: { id },
  });
};
