import { CHANGE_POPUP_STATUS } from '../actions-types/authTypes';

export const changePopupStatus = (status:boolean) => (dispatch:any) => {
  dispatch({
    type: CHANGE_POPUP_STATUS,
    payload: { status },
  });
};
