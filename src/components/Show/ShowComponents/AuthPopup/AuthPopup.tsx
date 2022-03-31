import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { AuthPopupStyled } from './AuthPopupStyled';
import FormikField from '../../../Basic/Form/FormikField';
import Button from '../../../Basic/Button';
import { getSessionID } from '../../../../utils/uniqueSessionID';
import { authOTPValidation, authPhoneValidation, authPopupInitialValues } from './AuthPopupConstants';
import { AUTHENTICATION_USER, CREATE_OTP } from '../../../../GraphQL/OTP/OtpMutations';
import { closePopup } from '../../../../redux/actions/showAction';

const AuthPopup:React.FC = () => {
  const [phoneDispatched, setPhoneDispatched] = useState<boolean>(false);

  const sessionID = getSessionID();
  const [createOTP] = useMutation(CREATE_OTP);
  const [authenticationUser] = useMutation(AUTHENTICATION_USER);

  const dispatch = useDispatch();

  const onSubmitHandler = (values: any) => {
    const { phone, OTP } = values;
    if (!phoneDispatched) {
      createOTP({ variables: { data: { value: phone, sessionID, typeOfOTP: 'PHONE' } } })
        .then(() => setPhoneDispatched(true));
    } else {
      authenticationUser({ variables: { data: { phone, code: OTP, sessionID } } })
        .then(({ data }) => {
          localStorage.setItem('token', data.authenticationUser);
          dispatch(closePopup());
          window.location.reload();
        });
    }
  };

  const formik = useFormik({
    initialValues: authPopupInitialValues,
    validateOnChange: true,
    validationSchema: phoneDispatched ? authOTPValidation : authPhoneValidation,
    enableReinitialize: true,
    onSubmit: (values) => onSubmitHandler(values),
  });

  return (
    <AuthPopupStyled>
      <div className="popup-title">Authentication</div>

      <form onSubmit={formik.handleSubmit}>
        <FormikField
          type="text"
          name="phone"
          label="Your phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone}
          disabled={phoneDispatched}
        />
        {phoneDispatched && (
          <FormikField
            type="text"
            name="OTP"
            label="Type OTP"
            onChange={formik.handleChange}
            value={formik.values.OTP}
            error={formik.errors.OTP}
          />
        )}
        <Button name="Submit" />
      </form>

    </AuthPopupStyled>
  );
};

export default AuthPopup;
