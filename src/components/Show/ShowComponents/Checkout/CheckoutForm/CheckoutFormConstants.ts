import * as Yup from 'yup';
import { STRINGS } from '../../../../../constants';
import { getDisponibleHours } from '../../../../../utils/getDisponibleHours';
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

export const CheckoutFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, STRINGS.SHOULD_CONTAIN('5'))
    .required(STRINGS.IS_REQUIRED('name')),
  email: Yup.string()
    .email(STRINGS.EMAIL_NOTVALID)
    .min(10, STRINGS.SHOULD_CONTAIN('10'))
    .required(STRINGS.IS_REQUIRED('email')),
  date: Yup.string()
    .required(STRINGS.IS_REQUIRED('date')),
  time: Yup.string()
    .required(STRINGS.IS_REQUIRED('time')),
});
