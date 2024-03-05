import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { useMemo } from 'react';

import { SessionProvider } from 'next-auth/react';

export function initializeApollo(initialState = null) {
  const _apolloClient = new ApolloClient({
    // Local GraphQL Endpoint

    uri: 'http://localhost:3000/graphql',

    // Add your Preevy GraphQL Endpoint

    // uri: 'https://yourapp.livecycle.run/graphql',

    // Add your Vercel GraphQL Endpoint

    // uri: 'https://yourapp.vercel.app/graphql',

    // Add your Netlify GraphQL Endpoint

    // uri: 'https://yourapp.netlify.app/graphql',

    cache: new InMemoryCache().restore(initialState || {}),
  });

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}

export default function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, session, ...pageProps }) => {
    const client = useApollo(apolloState);

    return (
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <PageComponent {...pageProps} />
        </ApolloProvider>
      </SessionProvider>
    );
  };

  // On the server

  if (typeof window === 'undefined') {
    WithApollo.getInitialProps = async (ctx) => {
      const apolloClient = initializeApollo();

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (ctx.res && ctx.res.finished) {
        // When redirecting, the response is finished.

        // No point in continuing to render

        return pageProps;
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,

        apolloState,
      };
    };
  }

  return WithApollo;
}