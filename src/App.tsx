import { useQuery } from '@apollo/client';
import React from 'react';
import { TOKEN_IS_VALID } from './GraphQL/Auth/AuthQueries';
import routes, { AppRouter } from './routes';

const App:React.FC = () => {
  const { error, data = {} } = useQuery(TOKEN_IS_VALID, { variables: { token: localStorage.getItem('token') } });
  const { tokenIsValid = {} } = data;
  console.log(tokenIsValid, 'token is invalid');
  return (
    <AppRouter routes={routes} />
  );
};

export default App;
