import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";
import { StoreProvider } from "../context/store";
import createEmotionCache from "../styles/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      maxSnack={2}
      preventDuplicate
    >
      <CacheProvider value={emotionCache}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </CacheProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
