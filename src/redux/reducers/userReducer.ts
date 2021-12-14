import { SET_USER } from '../actions-types/userTypes';
import { userInitialStateInterface } from '../reducerTypes/userTypes';

const initialState: userInitialStateInterface = {
  id: '',
  phone: '',
  address: '',
  address_lat: '',
  address_long: '',
  isLogged: false,
};

export const userReducer = (state = initialState, action:any) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER: {
      console.log(payload);
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
