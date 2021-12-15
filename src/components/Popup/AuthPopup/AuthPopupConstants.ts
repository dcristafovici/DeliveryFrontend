import * as Yup from 'yup';

const phoneRegExp = new RegExp('^(\\+7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');
export const AuthPopupValidation = Yup.object().shape({
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  OTP: Yup.string()
    .required('OTP is required.')
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits'),
});
