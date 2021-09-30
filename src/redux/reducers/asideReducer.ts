import {
  ADD_PRODUCT,
  ADD_QUANTITY,
  CLEAR_ASIDE,
  REMOVE_PRODUCT,
  SET_ASIDE_DATA,
  SET_TOTAL,
  SUB_QUANTITY,
  CHECKOUT_STATUS,
} from '../actions-types/asideTypes';
import { AsideItemInterface } from '../types/reduxTypes';

const initialState = {
  minPrice: 0,
  deliveryTime: 0,
  total: 0,
  cart: [],
  checkout: false,
};

export const asideReducer = (state = initialState, action:any) => {
  const { cart } = state;
  const { payload } = action;
  switch (action.type) {
    case ADD_PRODUCT: {
      const itemInCart = cart.find((item:AsideItemInterface) => item.id === payload.id);
      if (itemInCart) {
        return {
          ...state,
          cart: cart.map((item:any) => (item !== itemInCart
            ? item
            : { ...item, quantity: item.quantity + 1 })),
        };
      }
      return {
        ...state,
        cart: [...cart, {
          id: payload.id,
          name: payload.name,
          price: payload.price,
          weight: payload.weight,
          quantity: 1,
        }],
      };
    }

    case CLEAR_ASIDE:
      return {
        ...state,
        minimalPrice: 0,
        cart: [],
        total: 0,
      };

    case ADD_QUANTITY: {
      const itemInCart = cart.find((item:AsideItemInterface) => item.id === payload.id);
      return {
        ...state,
        cart: cart.map((item:any) => (item !== itemInCart
          ? item
          : { ...item, quantity: item.quantity + 1 })),
      };
    }

    case SUB_QUANTITY: {
      const itemInCart = cart.find((item:AsideItemInterface) => item.id === payload.id);
      return {
        ...state,
        cart: cart.map((item:any) => (item !== itemInCart
          ? item
          : { ...item, quantity: item.quantity - 1 })),
      };
    }

    case REMOVE_PRODUCT: {
      const itemInCart = cart.find((item:AsideItemInterface) => item.id === payload.id);
      return {
        ...state,
        cart: cart.filter((item:any) => item !== itemInCart),
      };
    }

    case SET_ASIDE_DATA: {
      return {
        ...state,
        deliveryTime: payload.deliveryTime,
        minPrice: payload.minPrice,
      };
    }
    case SET_TOTAL:
      return {
        ...state,
        total: payload.price,
      };
    case CHECKOUT_STATUS:
      return {
        ...state,
        checkout: payload.status,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
