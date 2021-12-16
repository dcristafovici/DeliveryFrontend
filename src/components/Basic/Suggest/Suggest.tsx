import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FIND_POSSIBLE_ADDRESSES } from '../../../GraphQL/Address/AddressQueries';
import { UPDATE_USER } from '../../../GraphQL/User/UserMutations';
import { setUserData } from '../../../redux/actions/userAction';
import { useTypeSelector } from '../../../redux/reduxHooks';
import { useDebouncedEffect } from '../../../types/useDebouncedEffect';
import { CloseIcon } from '../Icons';
import { SuggestInterface } from './SuggestInterface';
import { SuggestStyled } from './SuggestStyled';

const Suggest:React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [addressFromUser, setAddressFromUser] = useState<boolean>(false);

  const dispatch = useDispatch();
  const [updateUser] = useMutation(UPDATE_USER);
  const { id, address: userAddress } = useTypeSelector((state) => state.userReducer);

  const [getSuggest, { data = {} }] = useLazyQuery(FIND_POSSIBLE_ADDRESSES);
  const { findPossibleAddresses = [] } = data;

  useDebouncedEffect(() => {
    if (address && !addressFromUser) {
      getSuggest({ variables: { address } });
    }
  }, [address], 500);

  useEffect(() => {
    if (userAddress) {
      setAddress(userAddress);
      setAddressFromUser(true);
    }
  }, [userAddress]);

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddress(value);
  };

  const onResetHandler = (e:React.FormEvent<HTMLDivElement>) => {
    setAddressFromUser(false);
  };

  const onClickHandler = (item: SuggestInterface) => {
    const { value, data: addressData } = item;
    const { geo_lat: address_lat, geo_lon: address_lon } = addressData;
    const combinedCoordinates = { address: value, address_lat, address_lon };
    updateUser({ variables: { id, data: { ...combinedCoordinates } } })
      .then(() => {
        dispatch(setUserData(combinedCoordinates));
      })
      .catch((err) => console.log(err));
  };
  return (
    <SuggestStyled className={addressFromUser ? 'user-seted' : ''}>
      <div className="suggested-input">
        <input
          type="text"
          key={userAddress}
          onChange={onChangeHandler}
          defaultValue={address}
          placeholder="Type your location"
        />
      </div>
      {findPossibleAddresses.length ? (
        <div className="suggested-results">
          <ul>
            {findPossibleAddresses.map((item:SuggestInterface) => (
              <li onClick={() => onClickHandler(item)} key={item.value}>{item.value}</li>
            ))}
          </ul>
        </div>
      ) : ''}
      {addressFromUser && (
        <div
          className="address-reset"
          onClick={onResetHandler}
          role="button"
          tabIndex={0}
        >
          <CloseIcon />
        </div>
      )}
    </SuggestStyled>
  );
};

export default Suggest;
