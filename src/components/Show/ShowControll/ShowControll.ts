import AuthPopup from '../ShowComponents/AuthPopup';
import Checkout from '../ShowComponents/Checkout';
import CheckoutSuccess from '../ShowComponents/Checkout/CheckoutSuccess';
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
    id: ShowControllEnum.CHECKOUT_SUCCESS,
    component: CheckoutSuccess,
  },
  {
    id: ShowControllEnum.INFO,
    component: InfoPopup,
  },
];
