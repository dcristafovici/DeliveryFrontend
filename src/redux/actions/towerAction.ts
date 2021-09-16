import { SET_TOWER } from '../actions-types/towerTypes';

export const setTower = (tower:string) => (dispatch: any) => {
  dispatch({
    type: SET_TOWER,
    payload: tower,
  });
};
