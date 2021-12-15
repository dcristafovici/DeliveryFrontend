import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FIND_POSSIBLE_ADDRESSES } from '../../../GraphQL/Address/AddressQueries';
import { UPDATE_USER } from '../../../GraphQL/User/UserMutations';
import { setUserAddress } from '../../../redux/actions/userAction';
import { useDebouncedEffect } from '../../../types/useDebouncedEffect';
import { SuggestInterface } from './SuggestInterface';
import { SuggestStyled } from './SuggestStyled';

const Suggest:React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [getSuggest, { loading, data = {} }] = useLazyQuery(FIND_POSSIBLE_ADDRESSES);
  const { findPossibleAddresses = [] } = data;

  const dispatch = useDispatch();
  const [updateUser] = useMutation(UPDATE_USER);

  useDebouncedEffect(() => {
    getSuggest({ variables: { address } });
  }, [address], 500);

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddress(value);
  };
  const onClickHandler = (item: SuggestInterface) => {
    const { value, data: addressData } = item;
    const { geo_lat, geo_lon } = addressData;
    const combinedCoordinates = { address: value, address_lat: geo_lat, address_lon: geo_lon };
    updateUser({ variables: { id: '44e9a38f-4e89-44bf-b6c3-12ddf3af7d2e', data: { ...combinedCoordinates } } });
    dispatch(setUserAddress(combinedCoordinates));
  };

  return (
    <SuggestStyled>
      <div className="suggested-input">
        <input type="text" onChange={onChangeHandler} placeholder="Type your location" />
      </div>
      <div className="suggested-results">
        <ul>
          {findPossibleAddresses && findPossibleAddresses.map((item:SuggestInterface) => (
            <li onClick={() => onClickHandler(item)} key={item.value}>{item.value}</li>
          ))}
        </ul>
      </div>
    </SuggestStyled>
  );
};

export default Suggest;
