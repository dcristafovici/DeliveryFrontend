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
import { changePopupStatus, setUser } from '../../redux/actions/authAction';

const initialValues:AuthenticationFormInterface = {
  phone: '',
  code: '',
};
const phoneRegExp = new RegExp('^(\\+7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');
const AuthenticationFormScheme = Yup.object().shape({
  phone: Yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone numbers is not valid'),
  // code: Yup.number()
  //   .test('length', 'Must be exactly 4 digits', (val) => String(val).length === 4)
  //   .typeError('Code must be a number type'),
});

const Authentication:React.FC = () => {
  const [isCodeField, setIsCodeField] = useState(false);

  const [sendPhone] = useMutation(SEND_PHONE);
  const [checkCode] = useMutation(CHECK_CODE);
  const [addUser] = useMutation(ADD_USER);

  const dispatch = useDispatch();

  const handleSubmit = (values:AuthenticationFormInterface, { resetForm, setErrors } : any) => {
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
          addUser({ variables: { data: { phone: values.phone } } })
            .then(({ data: AddUserStatus }) => {
              if (AddUserStatus) {
                const { token, ...user } = AddUserStatus.AddUser;
                localStorage.setItem('token', token);
                dispatch(changePopupStatus(false));
                dispatch(setUser(token, user));
              }
            });
        })
        .catch((err) => setErrors({ code: err.message }));
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
                  type="number"
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
