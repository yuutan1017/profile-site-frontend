import "../styles/globals.css";
import type { AppProps } from "next/app";

import { useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>Yuta&apos;s Profile</title>
      </Head>
      <AnimatePresence>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              fontFamily: "inherit",
              colorScheme: colorScheme,
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
