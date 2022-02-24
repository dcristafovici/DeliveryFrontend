import { ApolloError, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER_BY_TOKEN } from '../../GraphQL/User/UserQueries';
import { setUserData } from '../../redux/actions/userAction';

const ValidationToken:React.FC = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  let responseFromToken = {};
  let errorFromToken: ApolloError | undefined;

  if (token) {
    const { data = {}, error } = useQuery(GET_USER_BY_TOKEN, { variables: { token } });
    const { getUserByToken } = data;
    responseFromToken = getUserByToken;
    errorFromToken = error;
  }
  useEffect(() => {
    if (Object.keys(responseFromToken).length) {
      dispatch(setUserData(responseFromToken));
    } else if (errorFromToken) {
      console.log(errorFromToken.message, 'ValidationToken error');
    }
  }, [responseFromToken, errorFromToken]);

  return (
    <></>
  );
};

export default ValidationToken;
