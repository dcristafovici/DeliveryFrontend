import { useQuery } from '@apollo/client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN_IS_VALID } from '../../GraphQL/Auth/AuthQueries';
import { setUser } from '../../redux/actions/userAction';

const UserIsValid:React.FC = () => {
  const { loading, data = {} } = useQuery(TOKEN_IS_VALID, { variables: { token: localStorage.getItem('token') } });
  const { tokenIsValid = {} } = data;
  const dispatch = useDispatch();
  if (!loading) {
    dispatch(setUser(tokenIsValid));
  }
  return (
    <></>
  );
};

export default UserIsValid;
