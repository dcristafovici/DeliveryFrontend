import * as Yup from 'yup';
import { AuthFormPopupInterface } from './AuthPopupInterface';

export const authPhoneValidation = Yup.object().shape({
  phone: Yup.string()
    .required('Phone is required'),
});

export const authOTPValidation = Yup.object().shape({
  OTP: Yup.number()
    .required('OTP is required.')
    .test('len', 'Must be exactly 4 characters', (val) => {
      if (val) {
        return val.toString().length === 4;
      }
      return false;
    }),
});

export const authPopupInitialValues: AuthFormPopupInterface = {
  phone: '',
  OTP: '',
};
