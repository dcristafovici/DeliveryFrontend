import { ApolloError, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER_BY_TOKEN } from '../../GraphQL/User/UserQueries';
import { setUserData } from '../../redux/actions/userAction';

const ValidationToken:React.FC = () => {
  const token = localStorage.getItem('user_token');
  const dispatch = useDispatch();
  let responseFromToken:any = null;
  let errorFromToken: ApolloError | undefined;

  if (token) {
    const { data = {}, error } = useQuery(GET_USER_BY_TOKEN, { variables: { token } });
    const { getUserByToken } = data;
    responseFromToken = getUserByToken;
    errorFromToken = error;
  }
  useEffect(() => {
    if (responseFromToken) {
      dispatch(setUserData(responseFromToken));
    }
  }, [responseFromToken, errorFromToken]);

  return (
    <div className="validation-token" />
  );
};

export default ValidationToken;
