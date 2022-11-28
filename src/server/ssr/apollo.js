import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import fetch from 'node-fetch';

export default (req, loggedIn) => {
  const AuthLink = (operation, next) => {
    if(loggedIn) {
      operation.setContext(context => ({
        ...context,
        headers: {
          ...context.headers,
          Authorization: req.cookies.get('authorization')
        },
      }));
    }
    return next(operation)
  };
  const client = new ApolloClient({
    ssrMode: true,
    link: from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path, extensions }) => {
            console.log(`[GraphQL error]: Message: ${message},
            Location: ${locations}, Path: ${path}`);
          });
          if (networkError) {
            console.log(`[Network error]: ${networkError}`);
          }
        }
      }),
      AuthLink,
      new HttpLink({
	      uri: 'http://ec2-18-118-254-233.us-east-2.compute.amazonaws.com/graphql',
        credentials: 'same-origin',
        fetch
      })
    ]),
    cache: new InMemoryCache(),
  });
  return client;
};
