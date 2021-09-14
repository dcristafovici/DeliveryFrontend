import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { Global } from './Global/Global';
import { GraphqlClient } from './GraphQL/GraphqlClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={GraphqlClient}>
      <Global />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
