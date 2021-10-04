import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/authAction';
import { CHECK_TOKEN } from '../GraphQL/Queries';

export const checkTokenValidate = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const dispatch = useDispatch();
    const { loading, data = {} } = useQuery(CHECK_TOKEN, { variables: { token } });
    const { CheckToken = {} } = data;
    useEffect(() => {
      dispatch(setUser(token, CheckToken));
    }, [loading]);
  }
};
