import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { serverPath } from '../utils/envMode';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

const httpLink = createHttpLink({
  uri: `${serverPath}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const GraphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
