import AuthPopup from '../ShowComponents/AuthPopup';
import Checkout from '../ShowComponents/Checkout';
import { ShowControllEnum } from './ShowControllEnum';
import { ShowControllInterface } from './ShowControllInterface';

export const ShowControll: ShowControllInterface[] = [
  {
    id: ShowControllEnum.AUTHENTICATION,
    component: AuthPopup,
  },
  {
    id: ShowControllEnum.CHECKOUT,
    component: Checkout,
  },
];
