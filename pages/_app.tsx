import { Provider } from "react-redux";
import store from "../redux/store";
import { GqlClient } from "../graphql";
import { AuthProvider } from "../providers/auth";
import { WsProvider } from "../providers/ws";
import { Provider as GqlClientPrivider } from "urql"
import Head from "next/head";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <WsProvider>
            <GqlClientPrivider value={GqlClient}>
              <Component {...pageProps} />
            </GqlClientPrivider>
          </WsProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}
