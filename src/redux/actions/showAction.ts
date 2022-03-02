import { ShowControllEnum } from '../../components/Show/ShowControll/ShowControllEnum';
import { OPEN_POPUP, CLOSE_POPUP } from '../actions-types/showTypes';

export const openPopup = (id: ShowControllEnum, date = {}) => (dispatch:any) => {
  dispatch({
    type: OPEN_POPUP,
    payload: { id, date },
  });
  document.body.classList.add('no-scroll');
};

export const closePopup = () => (dispatch:any) => {
  dispatch({
    type: CLOSE_POPUP,
  });
  document.body.classList.remove('no-scroll');
};
