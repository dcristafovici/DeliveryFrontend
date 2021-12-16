import { IUser } from '../types/userReducerInterface';
import { SET_USER_DATA } from '../actions-types/userTypes';

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
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};
