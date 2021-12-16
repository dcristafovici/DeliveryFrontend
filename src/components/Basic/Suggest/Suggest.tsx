import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FIND_POSSIBLE_ADDRESSES } from '../../../GraphQL/Address/AddressQueries';
import { UPDATE_USER } from '../../../GraphQL/User/UserMutations';
import { setUserData } from '../../../redux/actions/userAction';
import { useDebouncedEffect } from '../../../types/useDebouncedEffect';
import { SuggestInterface } from './SuggestInterface';
import { SuggestStyled } from './SuggestStyled';

const Suggest:React.FC = () => {
  const [address, setAddress] = useState<string>('');

  const [getSuggest, { loading, data = {} }] = useLazyQuery(FIND_POSSIBLE_ADDRESSES);
  const { findPossibleAddresses = [] } = data;

  const [updateUser] = useMutation(UPDATE_USER);

  useDebouncedEffect(() => {
    getSuggest({ variables: { address } });
  }, [address], 500);

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddress(value);
  };

  const dispatch = useDispatch();
  const onClickHandler = (item: SuggestInterface) => {
    const { value, data: addressData } = item;
    const { geo_lat, geo_lon } = addressData;
    const combinedCoordinates = { address: value, address_lat: geo_lat, address_lon: geo_lon };
    dispatch(setUserData(combinedCoordinates));
  };
  return (
    <SuggestStyled>
      <div className="suggested-input">
        <input type="text" onChange={onChangeHandler} defaultValue={address} placeholder="Type your location" />
      </div>
      {findPossibleAddresses.length && (
        <div className="suggested-results">
          <ul>
            {findPossibleAddresses.map((item:SuggestInterface) => (
              <li onClick={() => onClickHandler(item)} key={item.value}>{item.value}</li>
            ))}
          </ul>
        </div>
      )}
    </SuggestStyled>
  );
};

export default Suggest;
