import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CheckoutStyled, OverlayStyled } from './CheckoutStyled';
import { CheckoutFormInterface } from './CheckoutInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import FormikFieldDate from '../Basic/Form/FormikFieldDate';
import FormikFieldSelect from '../Basic/Form/FormikFieldSelect';
import { setCheckoutStatus } from '../../redux/actions/asideAction';
import { CREATE_ORDER } from '../../GraphQL/Mutations';
import { useTypeSelector } from '../../redux/useTypeSelector';

const CheckoutFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  phone: Yup.string()
    .required('Required'),
  floor: Yup.string()
    .required('Required'),
  office: Yup.string()
    .required('Required'),
  apartament: Yup.string()
    .required('Required'),
  date: Yup.string()
    .required('Required'),
  time: Yup.string()
    .required('Required'),
  additional: Yup.string()
    .required('Required'),
});

const Checkout:React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useTypeSelector((state) => state.authReducer);
  const { total, deliveryTime } = useTypeSelector((state) => state.asideReducer);

  const [createOrder] = useMutation(CREATE_ORDER);
  const [initialValues, setInitialValues] = useState<CheckoutFormInterface>({
    name: '',
    phone: '',
    tower: '',
    floor: '',
    office: '',
    apartament: '',
    date: '',
    time: '',
    additional: '',
  });

  // useEffect(() => {
  //   setInitialValues((prev) => ({ ...initialValues .tower.}));
  // }, [user]);

  const handleSubmit = (values:CheckoutFormInterface, { resetForm } : any) => {
    console.log(values);
  };
  return (
    <>
      <OverlayStyled onClick={() => dispatch(setCheckoutStatus(false))} />
      <CheckoutStyled>
        <div className="checkout-title">Checkout</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
          validationSchema={CheckoutFormSchema}
          enableReinitialize
        >
          {({ dirty, isValid, errors, getFieldProps, setFieldValue, touched }) => (
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
                <FormRow className="one-element">
                  <FormikFieldSelect selectDefault={initialValues.tower} />
                </FormRow>
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
              <FormWrapper title="Delivery detailes">
                <FormRow>
                  <FormikFieldDate
                    name="additional"
                    label="Choose date"
                    error={errors.date}
                    onChange={(name:string, value:string) => setFieldValue(name, value)}
                    touched={touched.date}
                  />
                  <FormikField
                    {...getFieldProps('time')}
                    name="additional"
                    type="time"
                    label="Choose time"
                    error={errors.time}
                    touched={touched.time}
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
              <div className="checkout-general">
                <div className="checkout-general__point">
                  <span>Время доставки</span>
                  <span>{deliveryTime}</span>
                </div>
                <div className="checkout-general__point">
                  <span>Итого</span>
                  <span>{total}</span>
                </div>
              </div>
              <Button name="Checkout" className="full" disabled={!dirty || !isValid} />
              <div className="checkout-info">
                By sending a message you agree to
                <span> the privacy policy and processing of personal data </span>
              </div>
            </Form>
          )}
        </Formik>
      </CheckoutStyled>
    </>
  );
};

export default Checkout;
