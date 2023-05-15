import "../styles/globals.css";
import Head from "next/head";
import movies from "../reducers/movies";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { movies },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>FleetMovieApp</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
