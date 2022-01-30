import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

function createSubscriptionExchange() {
  const wsClient = createWSClient({
    url: process.env.NEXT_PUBLIC_FLO_STATS_ENDPONT_WS || 'wss://stats.w3flo.com/ws',
  });
  return subscriptionExchange({
    forwardSubscription: (operation) => ({
      subscribe: (sink) => ({
        unsubscribe: wsClient.subscribe(operation, sink),
      }),
    }),
  })
}

function createGqlClient() {  
  const exchanges = [
    ...defaultExchanges
  ]

  if (process.browser) {
    exchanges.push(createSubscriptionExchange())
  }

  return createClient({
    url: process.env.NEXT_PUBLIC_FLO_STATS_ENDPONT_GRAPHQL || 'https://stats.w3flo.com',
    exchanges
  });
}

export const GqlClient = createGqlClient();