import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import Button from '../../../Basic/Button';
import FormikField from '../../../Basic/Form/FormikField';
import FormRow from '../../../Basic/Form/FormRow';
import { CheckoutFormInitialValues } from './CheckoutFormConstants';
import { CheckoutFormInterface } from './CheckoutFormInterface';
import { CheckoutFormStyled } from './CheckoutFormStyled';

const CheckoutForm:React.FC = () => {
  const user = useTypeSelector((state) => state.userReducer);
  const [initialValues, setInitialValues] = useState<
    CheckoutFormInterface>(CheckoutFormInitialValues);

  const onSubmitHandler = (values:any) => {
    console.log(values);
  };

  useEffect(() => {
    if (user.id) {
      Object.keys(initialValues).forEach((element:string) => {
        if (user[element]) {
          console.log(user[element]);
        }
      });
    }
  }, [user]);

  const formik = useFormik({
    initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: (values) => onSubmitHandler(values),
  });
  return (
    <CheckoutFormStyled>
      <form onSubmit={formik.handleSubmit}>
        <FormRow>
          {/* <FormikField
            type="text"
            name="name"
            label="Your name"
            value={formik.values.name}
            error={formik.errors.name}
          />
          <FormikField
            type="text"
            name="phone"
            label="Your phone"
            value={formik.values.phone}
            error={formik.errors.phone}
            disabled
          />
        </FormRow>
        <FormRow className="one-element">
          <FormikField
            type="text"
            name="email"
            label="Your email"
            value={formik.values.email}
            error={formik.errors.email}
          /> */}
        </FormRow>
        <Button name="Checkout" className="full" />
      </form>
    </CheckoutFormStyled>
  );
};

export default CheckoutForm;
