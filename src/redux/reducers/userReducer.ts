import { SET_USER } from '../actions-types/userTypes';
import { userInitialStateInterface } from '../reducerTypes/userTypes';

const initialState: userInitialStateInterface = {
  id: '',
  phone: '',
  address: '',
  geo_lat: '',
  geo_lon: '',
  isLogged: false,
};

export const userReducer = (state = initialState, action:any) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER: {
      const { id, phone } = payload.user;
      return {
        ...state,
        id,
        phone,
        isLogged: true,
      };
    }
    default: {
      return state;
    }
  }
};
