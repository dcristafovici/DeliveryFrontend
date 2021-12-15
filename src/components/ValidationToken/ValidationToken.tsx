import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER_BY_TOKEN } from '../../GraphQL/User/UserQueries';
import { setUserData } from '../../redux/actions/userAction';

const ValidationToken:React.FC = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const { loading, data = {}, error } = useQuery(GET_USER_BY_TOKEN, { variables: { token } });
  const { getUserByToken } = data;
  useEffect(() => {
    if (getUserByToken) {
      dispatch(setUserData(getUserByToken));
    }
  }, [getUserByToken]);

  return (
    <></>
  );
};

export default ValidationToken;
