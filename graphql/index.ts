import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
const { FLO_STATS_ENDPONT_GRAPHQL, FLO_STATS_ENDPONT_WS } = process?.env

function createSubscriptionExchange() {
  const wsClient = createWSClient({
    url: FLO_STATS_ENDPONT_WS || 'wss://stats.w3flo.com/ws',
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
    url: FLO_STATS_ENDPONT_GRAPHQL || 'https://stats.w3flo.com/graphql',
    exchanges
  });
}

export const GqlClient = createGqlClient();