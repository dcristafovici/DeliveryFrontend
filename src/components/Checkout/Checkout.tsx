import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { CheckoutStyled, OverlayStyled } from './CheckoutStyled';
import { CheckoutFormInterface } from './CheckoutInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import FormikFieldDate from '../Basic/Form/FormikFieldDate';
import { setCheckoutStatus } from '../../redux/actions/asideAction';
import { CREATE_ORDER, UPDATE_USER } from '../../GraphQL/Mutations';
import { useTypeSelector } from '../../redux/useTypeSelector';

const Checkout:React.FC = () => {
  const dispatch = useDispatch();
  const [updateUser] = useMutation(UPDATE_USER);

  const { id: restaurantID } = useParams<{ id: string }>();

  const { user } = useTypeSelector((state) => state.authReducer);
  const { total, deliveryTime } = useTypeSelector((state) => state.asideReducer);
  const { id, email, address, ...filteredUser } = user;

  const [createOrder] = useMutation(CREATE_ORDER);
  const [initialValues, setInitialValues] = useState<CheckoutFormInterface>({
    name: '',
    phone: '',
    tower: '',
    floor: '',
    office: '',
    apartment: '',
    date: '',
    time: '',
    additional: '',
  });

  useEffect(() => {
    setInitialValues((prev) => ({ ...initialValues, ...filteredUser }));
  }, [user]);

  const onChangeEvent = (event:React.FormEvent<HTMLInputElement>) => {
    setInitialValues({ ...initialValues, [event.currentTarget.name]: event.currentTarget.value });
  };

  const onChangeDate = (name:any, date:any) => {
    const newDateFormat = date.toISOString().slice(0, 10);
    setInitialValues({ ...initialValues, [name]: newDateFormat });
  };

  const onSubmitHandler = (name:string) => {
    updateUser({ variables: { data: { id: user.id, field: name, value: initialValues.name } } });
  };

  const onSendHandle = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createOrder({ variables:
      { data: { ...initialValues, user: id, restaurant: restaurantID, totalPrice: `${total}$` } },
    });
  };
  return (
    <>
      <OverlayStyled onClick={() => dispatch(setCheckoutStatus(false))} />
      <CheckoutStyled>
        <div className="checkout-title">Checkout</div>
        <FormWrapper title="Your contacts">
          <FormRow>
            <FormikField
              name="name"
              label="Your name"
              onChange={onChangeEvent}
              defaultValue={initialValues.name}
              requireEdit
              clickEvent={() => onSubmitHandler('name')}
            />
            <FormikField
              name="phone"
              label="Your phone"
              onChange={onChangeEvent}
              defaultValue={initialValues.phone}
              requireEdit
              clickEvent={() => onSubmitHandler('phone')}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery address">
          <FormRow className="one-element">
            <FormikField
              name="tower"
              label="Tower"
              onChange={onChangeEvent}
              defaultValue={initialValues.tower}
              requireEdit
              clickEvent={() => onSubmitHandler('tower')}
            />
          </FormRow>
          <FormRow className="three-elements">
            <FormikField
              name="floor"
              label="Floor"
              onChange={onChangeEvent}
              defaultValue={initialValues.floor}
              requireEdit
              clickEvent={() => onSubmitHandler('floor')}
            />
            <FormikField
              name="office"
              label="Office"
              onChange={onChangeEvent}
              defaultValue={initialValues.office}
              requireEdit
              clickEvent={() => onSubmitHandler('office')}
            />
            <FormikField
              name="apartment"
              label="Apartment"
              onChange={onChangeEvent}
              defaultValue={initialValues.apartment}
              requireEdit
              clickEvent={() => onSubmitHandler('apartment')}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery detailes">
          <FormRow>
            <FormikFieldDate
              name="date"
              label="Choose date"
              onChange={onChangeDate}
              defaultValue={initialValues.date}
            />
            <FormikField
              name="time"
              label="Choose time"
              type="time"
              onChange={onChangeEvent}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Additional">
          <FormRow className="one-element">
            <FormikField
              name="additional"
              isTextarea
              label="Your comment"
              onChange={onChangeEvent}
            />
          </FormRow>
        </FormWrapper>
        <div className="checkout-general">
          <div className="checkout-general__point">
            <span>Delivery Time</span>
            <span>{deliveryTime}</span>
          </div>
          <div className="checkout-general__point">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>
        <Button name="Checkout" onClickEvent={onSendHandle} className="full" disabled={false} />
        <div className="checkout-info">
          By sending a message you agree to
          <span> the privacy policy and processing of personal data </span>
        </div>
      </CheckoutStyled>
    </>
  );
};

export default Checkout;
