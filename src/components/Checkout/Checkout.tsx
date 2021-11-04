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
import { clearAside, setCheckoutStatus } from '../../redux/actions/asideAction';
import { CREATE_ORDER, UPDATE_USER } from '../../GraphQL/Mutations';
import { useTypeSelector } from '../../redux/useTypeSelector';
import { Towers } from '../Banner/Towers';
import FormSelect from '../Basic/Form/FormSelect/FormSelect';
import FieldUpdate from '../Basic/Form/FieldUpdate';

const Checkout:React.FC = () => {
  const dispatch = useDispatch();

  const { id: restaurantID } = useParams<{ id: string }>();

  const { user } = useTypeSelector((state) => state.authReducer);
  const { total, deliveryTime, cart = [] } = useTypeSelector((state) => state.asideReducer);
  const { id, email, address, ...filteredUser } = user;

  const [createOrder] = useMutation(CREATE_ORDER);
  const [updateUser] = useMutation(UPDATE_USER);

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

  const CartWithIDs = cart.map((item:any) => ({
    productID: parseFloat(item.id),
    quantity: parseFloat(item.quantity),
  }));

  useEffect(() => {
    setInitialValues((prev) => ({ ...initialValues, ...filteredUser }));
  }, [user]);

  const onChangeDate = (name:any, date:any) => {
    setInitialValues({ ...initialValues, [name]: date.toISOString().slice(0, 10) });
  };

  const onSendHandle = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createOrder({ variables:
      { data: { ...initialValues, user: id, restaurant: restaurantID, totalPrice: `${total}$`, cart: CartWithIDs } },
    })
      .then(() => {
        dispatch(setCheckoutStatus(false));
        dispatch(clearAside());
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <OverlayStyled onClick={() => dispatch(setCheckoutStatus(false))} />
      <CheckoutStyled>
        <div className="checkout-title">Checkout</div>
        <FormWrapper title="Your contacts">
          <FormRow>
            <FieldUpdate name="name" placeholder="Name" label="Your Name" defaultValue={initialValues.name} />
            <FieldUpdate name="phone" placeholder="Phone" label="Your phone" defaultValue={initialValues.phone} />

          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery address">
          <FormRow className="one-element">
            <FormSelect
              values={Towers}
              label="Choose Tower"
              selectDefault={initialValues.tower || 'Choose Tower'}
              onSelect={(option:string) => updateUser({ variables: { data: { id: user.id, field: 'tower', value: option } } })}
            />
          </FormRow>
          <FormRow className="three-elements">
            <FieldUpdate name="floor" placeholder="Floor" label="Your floor" defaultValue={initialValues.floor} />
            <FieldUpdate name="office" placeholder="Office" label="Your office" defaultValue={initialValues.office} />
            <FieldUpdate name="apartment" placeholder="Apartment" label="Your apartment" defaultValue={initialValues.apartment} />
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
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Additional">
          <FormRow className="one-element">
            <FormikField
              name="additional"
              isTextarea
              label="Your comment"
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
