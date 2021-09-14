import { ApolloClient, InMemoryCache } from '@apollo/client';

export const GraphqlClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
