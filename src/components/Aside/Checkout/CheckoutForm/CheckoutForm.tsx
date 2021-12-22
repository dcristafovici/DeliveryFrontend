import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CREATE_ORDER } from '../../../../GraphQL/Order/OrderMutations';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import Button from '../../../Basic/Button';
import FormikField from '../../../Basic/Form/FormikField';
import FormRow from '../../../Basic/Form/FormRow';
import FormSelect from '../../../Basic/Form/FormSelect';
import FormWrapper from '../../../Basic/Form/FormWrapper';
import CheckoutGeneral from '../CheckoutGeneral';
import { CheckoutFormInitialValues, TimeDeliveryTommorow, TimeToDelivery, CheckoutDays } from './CheckoutFormConstants';
import { checkoutDaysEnum, CheckoutFormInterface } from './CheckoutFormInterface';
import { CheckoutFormStyled } from './CheckoutFormStyled';

const CheckoutForm:React.FC = () => {
  const { id: restaurantID } = useParams<{ id: string }>();

  const user = useTypeSelector((state) => state.userReducer);
  const { cart = [] } = useTypeSelector((state) => state.asideReducer);

  const [createOrder] = useMutation(CREATE_ORDER);

  const [initialValues, setInitialValues] = useState<
    CheckoutFormInterface>(CheckoutFormInitialValues);

  const onSubmitHandler = (values: CheckoutFormInterface) => {
    const editedCart = cart.map((item:any) => ({
      product: item.id,
      quantity: item.quantity,
    }));
    const { name, phone, email, floor, office, apartment, date, time, additionalComment } = values;
    createOrder({ variables: {
      data: {
        user: user.id,
        restaurant: restaurantID,
        day: date,
        time,
        status: 'On hold',
        orderCart: editedCart,
        orderCustomer: {
          name,
          phone,
          email,
          address: 'Address placeholder',
          floor,
          office,
          apartment,
          additionalComment,
        },
      },
    } });
  };

  useEffect(() => {
    if (user.id) {
      Object.keys(initialValues).forEach((element:string) => {
        if (user[element]) {
          setInitialValues((prev: CheckoutFormInterface) => ({
            ...prev,
            [element]: user[element],
          }));
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
        <FormWrapper title="Your Contacts">
          <FormRow>
            <FormikField
              type="text"
              name="name"
              label="Your name"
              value={formik.values.name}
              error={formik.errors.name}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="phone"
              label="Your phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              disabled
              onChange={formik.handleChange}
            />
          </FormRow>
          <FormRow className="one-element">
            <FormikField
              type="text"
              name="email"
              label="Your email"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery address">
          <FormRow className="three-elements">
            <FormikField
              type="text"
              name="floor"
              label="Your floor"
              value={formik.values.floor}
              error={formik.errors.floor}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="office"
              label="Your office"
              value={formik.values.office}
              error={formik.errors.office}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="apartment"
              label="Your apartment"
              value={formik.values.apartment}
              error={formik.errors.apartment}
              onChange={formik.handleChange}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery detailes">
          <FormRow>
            <FormSelect
              values={CheckoutDays}
              label="Choose Day"
              selectDefault={initialValues.date}
              onSelect={(option:string) => { formik.setFieldValue('date', option); }}
            />
            <FormSelect
              values={
                initialValues.date === checkoutDaysEnum.TODAY
                  ? TimeToDelivery
                  : TimeDeliveryTommorow
                }
              label="Choose Time"
              selectDefault={initialValues.time}
              onSelect={(option:string) => { formik.setFieldValue('time', option); }}

            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Additional comment">
          <FormRow className="one-element">
            <FormikField
              type="text"
              name="additionalComment"
              label="Your comment"
              value={formik.values.additionalComment}
              error={formik.errors.additionalComment}
              onChange={formik.handleChange}
              isTextarea
            />
          </FormRow>
        </FormWrapper>
        <CheckoutGeneral />
        <Button name="Checkout" className="full" />
      </form>
    </CheckoutFormStyled>
  );
};

export default CheckoutForm;
