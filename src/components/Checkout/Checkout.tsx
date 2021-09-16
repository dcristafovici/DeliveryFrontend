import React from 'react';
import { Formik, Form } from 'formik';
import { CheckoutStyled, OverlayStyled } from './CheckoutStyled';
import { CheckoutFormInterface } from './CheckoutInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';

const initialValues:CheckoutFormInterface = {
  name: '',
  phone: '',
  tower: '',
  floor: '',
  office: '',
  apartament: '',
  date: '',
  time: '',
  additional: '',
};

const Checkout:React.FC = () => {
  const handleSubmit = (values:CheckoutFormInterface, { resetForm } : any) => {
    console.log(values);
  };
  return (
    <>
      <OverlayStyled />
      <CheckoutStyled>
        <div className="checkout-title">Checkout</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
        >
          {({ dirty, isValid, errors, getFieldProps, touched }) => (
            <Form>
              <FormWrapper title="Your contacts">
                <FormRow>
                  <FormikField
                    {...getFieldProps('name')}
                    name="name"
                    label="Your name"
                    error={errors.name}
                    touched={touched.name}
                  />
                  <FormikField
                    {...getFieldProps('phone')}
                    name="phone"
                    label="Your phone"
                    error={errors.phone}
                    touched={touched.phone}
                  />
                </FormRow>
              </FormWrapper>
              <FormWrapper title="Delivery address">
                <FormRow className="three-elements">
                  <FormikField
                    {...getFieldProps('floor')}
                    name="floor"
                    label="Floor"
                    error={errors.phone}
                    touched={touched.phone}
                  />
                  <FormikField
                    {...getFieldProps('office')}
                    name="office"
                    label="Office"
                    error={errors.office}
                    touched={touched.phone}
                  />
                  <FormikField
                    {...getFieldProps('apartament')}
                    name="apartament"
                    label="Apartament"
                    error={errors.apartament}
                    touched={touched.apartament}
                  />
                </FormRow>
              </FormWrapper>
              <FormWrapper title="Additional">
                <FormRow className="one-element">
                  <FormikField
                    {...getFieldProps('Comment')}
                    name="additional"
                    isTextarea
                    label="Your comment"
                    error={errors.additional}
                    touched={touched.additional}
                  />
                </FormRow>
              </FormWrapper>
            </Form>
          )}
        </Formik>
      </CheckoutStyled>
    </>
  );
};

export default Checkout;
