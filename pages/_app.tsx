import { Provider } from "react-redux";
import "../styles/index.css";

import store from "../redux/store";
import { AuthProvider } from "../providers/auth";
import { WsProvider } from "../providers/ws";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <WsProvider>
          <Component {...pageProps} />
        </WsProvider>
      </AuthProvider>
    </Provider>
  );
}
