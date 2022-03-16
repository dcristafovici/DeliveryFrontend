import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import App from './App';
import { Global } from './Global/Global';
import { GraphqlClient } from './GraphQL/GraphqlClient';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ApolloProvider client={GraphqlClient}>
        <Global />
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
