import { Provider } from "react-redux";
import "../styles/index.css";

import store from "../redux/store";
import { AuthProvider } from "../providers/auth";
import { WsProvider } from "../providers/ws";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flo - W3Champions Hostbot Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <WsProvider>
            <Component {...pageProps} />
          </WsProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}
