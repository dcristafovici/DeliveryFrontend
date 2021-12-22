import { getDisponibleHours } from '../../../../utils/getDisponibleHours';
import { CheckoutFormInterface } from './CheckoutFormInterface';

export const CheckoutDays = [
  {
    name: 'Today',
    label: 'Today',
  },
  {
    name: 'Tomorrow',
    label: 'Tomorrow',
  },
];
export const TimeToDelivery = getDisponibleHours(0, 30, true);
export const TimeDeliveryTommorow = getDisponibleHours(0, 30);

export const CheckoutFormInitialValues:CheckoutFormInterface = {
  name: '',
  phone: '',
  email: '',
  floor: '',
  office: '',
  apartment: '',
  date: CheckoutDays[0].label,
  time: TimeToDelivery[0].label,
  additionalComment: '',
};
