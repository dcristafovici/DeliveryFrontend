import AuthPopup from '../ShowComponents/AuthPopup';
import Checkout from '../ShowComponents/Checkout';
import InfoPopup from '../ShowComponents/InfoPopup';
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
  {
    id: ShowControllEnum.INFO,
    component: InfoPopup,
  },
];
