import { ShowControllEnum } from '../../components/Show/ShowControll/ShowControllEnum';

export interface IShow {
  isOpened: boolean;
  openedID: ShowControllEnum | null;
}
