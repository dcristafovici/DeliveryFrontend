import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Button from '../Basic/Button';
import FormikField from '../Basic/Form/FormikField';
import { OverlayStyled } from '../Checkout/CheckoutStyled';
import { AuthenticationFormInterface } from './AuthenticationInterface';
import { AuthenticationStyled } from './AuthenticationStyled';
import { ADD_USER, CHECK_CODE, SEND_PHONE } from '../../GraphQL/Mutations';
import { changePopupStatus } from '../../redux/actions/authAction';

const initialValues:AuthenticationFormInterface = {
  phone: '',
  code: '',
};
const AuthenticationFormScheme = Yup.object().shape({
  phone: Yup.string()
    .min(6, 'Too short')
    .required('Required'),
});

const Authentication:React.FC = () => {
  const [isCodeField, setIsCodeField] = useState(false);
  const [sendPhone] = useMutation(SEND_PHONE);
  const [checkCode] = useMutation(CHECK_CODE);
  const [addUser] = useMutation(ADD_USER);
  const dispatch = useDispatch();

  const handleSubmit = (values:AuthenticationFormInterface, { resetForm } : any) => {
    if (values.code === '') {
      sendPhone({ variables: { phone: values.phone } })
        .then(({ data }) => {
          const { sendPhoneAndGetStatus: status } = data;
          setIsCodeField(status);
        });
    } else {
      checkCode({ variables: {
        data: { phone: values.phone, code: parseFloat(values.code) },
      } })
        .then(({ data }) => {
          const { checkCode: codeIsValid } = data;
          if (codeIsValid) {
            addUser({ variables: { data: { phone: values.phone } } })
              .then(({ data: AddUserStatus }) => {
                if (AddUserStatus) {
                  dispatch(changePopupStatus(false));
                }
              });
          }
        });
    }
  };
  return (
    <>
      <OverlayStyled onClick={() => dispatch(changePopupStatus(false))} />
      <AuthenticationStyled>
        <div className="authentication-title">Sign in</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
          validationSchema={AuthenticationFormScheme}
        >
          {({ dirty, isValid, errors, getFieldProps, setFieldValue, touched }) => (
            <Form>
              <FormikField
                {...getFieldProps('phone')}
                name="phone"
                label="Phone number"
                error={errors.phone}
                touched={touched.phone}
                disabled={isCodeField && true}
              />
              {isCodeField && (
                <FormikField
                  {...getFieldProps('code')}
                  name="code"
                  label="Code"
                  error={errors.code}
                  touched={touched.code}
                />
              )}
              <Button className="full" name="Send" disabled={!dirty || !isValid} />
            </Form>
          )}
        </Formik>
      </AuthenticationStyled>
    </>
  );
};

export default Authentication;
