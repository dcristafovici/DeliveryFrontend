import * as Yup from 'yup';
import { AuthFormPopupInterface } from './AuthPopupInterface';

export const authPhoneValidation = Yup.object().shape({
  phone: Yup.string()
    .required('Phone is required'),
});

export const authOTPValidation = Yup.object().shape({
  OTP: Yup.string()
    .length(4, ' Enter correct code')
    .matches(/[0-9]+/gi, 'Enter number only')
    .required('OTP is required.'),
});

export const authPopupInitialValues: AuthFormPopupInterface = {
  phone: '',
  OTP: '',
};
