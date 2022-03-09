import * as Yup from 'yup';
import { STRINGS } from '../../../../../constants';
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
export const CheckoutFormInitialValues:CheckoutFormInterface = {
  name: '',
  phone: '',
  email: '',
  floor: '',
  office: '',
  date: '',
  apartment: '',
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
