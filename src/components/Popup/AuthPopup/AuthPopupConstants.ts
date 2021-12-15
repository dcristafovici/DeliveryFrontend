import * as Yup from 'yup';
import { AuthFormPopupInterface } from './AuthPopupInterface';

const phoneRegExp = new RegExp('^(\\+7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');

export const authPhoneValidation = Yup.object().shape({
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
});

export const authOTPValidation = Yup.object().shape({
  OTP: Yup.number()
    .required('OTP is required.')
    .test('len', 'Must be exactly 6 characters', (val) => {
      if (val) {
        return val.toString().length === 6;
      }
      return false;
    }),
});

export const authPopupInitialValues: AuthFormPopupInterface = {
  phone: '',
  OTP: '',
};
