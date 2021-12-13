import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { AuthPopupStyled } from './AuthPopupStyled';
import Overlay from './Overlay';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import { AUTHENTICATION_USER, CREATE_OTP } from '../../GraphQL/Auth/AuthMutations';
import { getSessionID } from '../../utils/uniqueSessionID';

const initialValues = {
  phone: '',
  otp: '',
};

const AuthPopup:React.FC = () => {
  const [typePhone, setTypePhone] = useState<boolean>(true);

  const [createOTP] = useMutation(CREATE_OTP);
  const [authenticationUser] = useMutation(AUTHENTICATION_USER);
  const sessionID = getSessionID();
  const handleSubmit = (values: any) => {
    const { phone, otp } = values;
    if (typePhone) {
      createOTP({ variables: { data: { phone, sessionID } } })
        .then(() => {
          setTypePhone(false);
        });
    } else {
      authenticationUser({ variables: { data: { phone, OTP: otp, sessionID } } })
        .then(({ data }) => {
          console.log(data.authenticationUser);
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <Overlay>
      <AuthPopupStyled>
        <div className="popup-title">Authentication</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
          enableReinitialize
        >
          {({ dirty, isValid, errors, getFieldProps, touched, setFieldValue }) => (
            <Form>
              {typePhone ? (
                <FormikField
                  {...getFieldProps('phone')}
                  type="text"
                  name="phone"
                  label="Your phone"
                />
              ) : (
                <FormikField
                  {...getFieldProps('otp')}
                  type="text"
                  name="otp"
                  label="OTP password"
                />
              )}
              <Button
                name="Submit"
                disabled={!dirty || !isValid}
              />
            </Form>
          )}
        </Formik>
      </AuthPopupStyled>
    </Overlay>
  );
};

export default AuthPopup;
