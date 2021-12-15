import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AuthPopupStyled } from './AuthPopupStyled';
import Overlay from './Overlay/Overlay';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import { AUTHENTICATION_USER, CREATE_OTP } from '../../GraphQL/Auth/AuthMutations';
import { getSessionID } from '../../utils/uniqueSessionID';
import Form from '../Basic/Form/Form';

const AuthPopup:React.FC = () => {
  const [typePhone, setTypePhone] = useState<boolean>(true);
  const [form, setForm] = useState({
    phone: '',
    OTP: '',
  });

  const sessionID = getSessionID();
  const [createOTP] = useMutation(CREATE_OTP);
  const [authenticationUser] = useMutation(AUTHENTICATION_USER);

  const onChangeEvent = (e:React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const onSubmitHandler = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { phone, OTP } = form;
    if (typePhone) {
      createOTP({ variables: { data: { phone, sessionID } } })
        .then(() => setTypePhone(false))
        .catch((err) => console.log(err));
    } else {
      authenticationUser({ variables: { data: { phone, OTP, sessionID } } })
        .then(({ data }) => {
          localStorage.setItem('token', data.authenticationUser);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <AuthPopupStyled>
      <div className="popup-title">Authentication</div>
      <Form>
        {typePhone ? (
          <FormikField name="phone" onChange={onChangeEvent} label="Your phone" />
        ) : (
          <FormikField type="number" name="OTP" onChange={onChangeEvent} label="OTP Code" />
        )}
        <Button onClickEvent={onSubmitHandler} name="Send" />
      </Form>
    </AuthPopupStyled>
  );
};

export default AuthPopup;
