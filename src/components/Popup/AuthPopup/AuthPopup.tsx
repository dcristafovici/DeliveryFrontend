import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { AuthPopupStyled } from './AuthPopupStyled';
import FormikField from '../../Basic/Form/FormikField';
import Button from '../../Basic/Button';
import { AUTHENTICATION_USER, CREATE_OTP } from '../../../GraphQL/Auth/AuthMutations';
import { getSessionID } from '../../../utils/uniqueSessionID';
import { AuthPopupValidation } from './AuthPopupConstants';

const AuthPopup:React.FC = () => {
  const [form, setForm] = useState({
    phone: '',
    OTP: '',
  });

  // Should provide different validations schema
  const onSubmitHandler = (values: any) => {
    const { phone, OTP } = values;
    console.log(phone, OTP);
    // if (typePhone) {
    //   createOTP({ variables: { data: { phone, sessionID } } })
    //     .then(() => setTypePhone(false))
    //     .catch((err) => console.log(err));
    // } else {
    //   authenticationUser({ variables: { data: { phone, OTP, sessionID } } })
    //     .then(({ data }) => {
    //       localStorage.setItem('token', data.authenticationUser);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // }
  };

  const formik = useFormik({
    initialValues: form,
    validateOnChange: true,
    validationSchema: AuthPopupValidation,
    enableReinitialize: true,
    onSubmit: (values) => onSubmitHandler(values),
  });

  const sessionID = getSessionID();
  const [createOTP] = useMutation(CREATE_OTP);
  const [authenticationUser] = useMutation(AUTHENTICATION_USER);

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
        />
        <FormikField
          type="number"
          name="OTP"
          label="Type OTP"
          onChange={formik.handleChange}
          value={formik.values.OTP}
          error={formik.errors.OTP}
        />
        <Button name="Submit" />
      </form>

    </AuthPopupStyled>
  );
};

export default AuthPopup;
