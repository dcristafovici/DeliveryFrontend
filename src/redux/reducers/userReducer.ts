import { IUser } from '../types/userReducerInterface';
import { SET_USER_DATA, SET_USER_ADDRESS } from '../actions-types/userTypes';

const initialState: IUser = {
  id: '',
  phone: '',
  email: '',
  address: '',
  address_lat: '',
  address_lon: '',
};

export const userReducer = (state = initialState, action:any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_DATA: {
      const { id, phone, email, address, address_lat, address_lon } = payload;
      return {
        ...state,
        id,
        phone,
        email,
        address,
        address_lat,
        address_lon,
      };
    }
    case SET_USER_ADDRESS: {
      const { address, address_lat, address_lon } = payload;
      return {
        ...state,
        address,
        address_lat,
        address_lon,
      };
    }
    default: {
      return state;
    }
  }
};
