import { CHANGE_POPUP } from '../actions-types/popupTypes';

export const showPopup = (status: boolean, text: string) => (dispatch:any) => {
  dispatch({
    type: CHANGE_POPUP,
    payload: { status, text },
  });
};
