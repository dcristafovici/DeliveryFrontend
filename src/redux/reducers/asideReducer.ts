import { ADD_PRODUCT, CLEAR_ASIDE } from '../actions-types/asideTypes';

const initialState = {
  minimalPrice: 0,
  cart: [],
  total: 0,
};

export const asideReducer = (state = initialState, action:any) => {
  const { cart } = state;
  const { payload } = action;
  switch (action.type) {
    case ADD_PRODUCT: {
      const itemInCart = cart.find((item:any) => item.id === action.payload.id);
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
    default: {
      return {
        ...state,
      };
    }
  }
};
