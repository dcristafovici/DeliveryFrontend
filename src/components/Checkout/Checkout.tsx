import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { CheckoutStyled, OverlayStyled } from './CheckoutStyled';
import { CheckoutFormInterface, CheckoutDays, TimeToDelivery } from './CheckoutInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import { clearAside, setCheckoutStatus } from '../../redux/actions/asideAction';
import { CREATE_ORDER, UPDATE_USER } from '../../GraphQL/Mutations';
import { useTypeSelector } from '../../redux/useTypeSelector';
import { Towers } from '../Banner/Towers';
import FormSelect from '../Basic/Form/FormSelect/FormSelect';
import FieldUpdate from '../Basic/Form/FieldUpdate';
import { updateUserValues } from '../../redux/actions/authAction';
import { SelectValue } from '../Basic/Select/SelectInterface';

const Checkout:React.FC = () => {
  const dispatch = useDispatch();

  const { id: restaurantID } = useParams<{ id: string }>();

  const { user } = useTypeSelector((state) => state.authReducer);
  const { total, deliveryTime, cart = [] } = useTypeSelector((state) => state.asideReducer);
  const { id, email, address, ...filteredUser } = user;

  const [createOrder] = useMutation(CREATE_ORDER);
  const [updateUser] = useMutation(UPDATE_USER);

  const [disponibleTime, setDisponibleTime] = useState<SelectValue[]>([]);

  useEffect(() => {
    const ds = () => {
      const hours = 24;
      const distance = 0.5;
      const iteration = hours / distance;
      const emptyArray = [];
      for (let i = 0; i < iteration; i += 1) {
        let time;
        if (i % 2 === 0) {
          time = `${i}:00`;
        }
        emptyArray.push({ label: time, name: time });
      }
      console.log(emptyArray);
    };
    ds();
  }, []);

  const [checkoutValues, setCheckoutValues] = useState<CheckoutFormInterface>({
    name: '',
    phone: '',
    tower: '',
    floor: '',
    office: '',
    apartment: '',
    date: CheckoutDays[0].label,
    time: TimeToDelivery[0].label,
    additional: '',
  });

  const CartWithIDs = cart.map((item:any) => ({
    productID: parseFloat(item.id),
    quantity: parseFloat(item.quantity),
  }));

  useEffect(() => {
    setCheckoutValues((prev) => ({ ...checkoutValues, ...filteredUser }));
  }, [user]);

  const onChangeTower = (option:string) => {
    updateUser({ variables: { data: { id: user.id, field: 'tower', value: option } } });
    dispatch(updateUserValues('tower', option));
  };

  const onSendHandle = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(checkoutValues);
    // createOrder({ variables:
    // eslint-disable-next-line max-len
    //   { data: { ...checkoutValues, user: id, restaurant: restaurantID, totalPrice: `${total}$`, cart: CartWithIDs } },
    // })
    //   .then(() => {
    //     dispatch(setCheckoutStatus(false));
    //     dispatch(clearAside());
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <OverlayStyled onClick={() => dispatch(setCheckoutStatus(false))} />
      <CheckoutStyled>
        <div className="checkout-title">Checkout</div>
        <FormWrapper title="Your contacts">
          <FormRow>
            <FieldUpdate name="name" placeholder="Name" label="Your Name" defaultValue={checkoutValues.name} />
            <FieldUpdate name="phone" placeholder="Phone" label="Your phone" defaultValue={checkoutValues.phone} />

          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery address">
          <FormRow className="one-element">
            <FormSelect
              values={Towers}
              label="Choose Tower"
              selectDefault={checkoutValues.tower || 'Choose Tower'}
              onSelect={(option:string) => onChangeTower(option)}
            />
          </FormRow>
          <FormRow className="three-elements">
            <FieldUpdate name="floor" placeholder="Floor" label="Your floor" defaultValue={checkoutValues.floor} />
            <FieldUpdate name="office" placeholder="Office" label="Your office" defaultValue={checkoutValues.office} />
            <FieldUpdate name="apartment" placeholder="Apartment" label="Your apartment" defaultValue={checkoutValues.apartment} />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery detailes">
          <FormRow>
            <FormSelect
              values={CheckoutDays}
              label="Choose Day"
              selectDefault={checkoutValues.date}
              onSelect={(option:string) => setCheckoutValues({ ...checkoutValues, date: option })}
            />
            <FormSelect
              values={TimeToDelivery}
              label="Choose Time"
              selectDefault={checkoutValues.time}
              onSelect={(option:string) => setCheckoutValues({ ...checkoutValues, time: option })}
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
