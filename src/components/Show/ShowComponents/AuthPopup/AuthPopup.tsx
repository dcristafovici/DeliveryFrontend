import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { AuthPopupStyled } from './AuthPopupStyled';
import FormikField from '../../../Basic/Form/FormikField';
import Button from '../../../Basic/Button';
import { getSessionID } from '../../../../utils/uniqueSessionID';
import { authOTPValidation, authPhoneValidation, authPopupInitialValues } from './AuthPopupConstants';
import { AuthPopupInterface } from './AuthPopupInterface';
import { AUTHENTICATION_USER, CREATE_OTP } from '../../../../GraphQL/OTP/OtpMutations';

const AuthPopup:React.FC<AuthPopupInterface> = ({ onClose }: AuthPopupInterface) => {
  const [phoneDispatched, setPhoneDispatched] = useState<boolean>(false);

  const sessionID = getSessionID();
  const [createOTP] = useMutation(CREATE_OTP);
  const [authenticationUser] = useMutation(AUTHENTICATION_USER);

  const onSubmitHandler = (values: any) => {
    const { phone, OTP } = values;
    if (!phoneDispatched) {
      createOTP({ variables: { data: { phone, sessionID } } })
        .then(() => setPhoneDispatched(true))
        .catch((err) => console.log(err));
    } else {
      authenticationUser({ variables: { data: { phone, OTP, sessionID } } })
        .then(({ data }) => {
          localStorage.setItem('token', data.authenticationUser);
          onClose();
        })
        .catch((err) => {
          console.log(err.message);
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
