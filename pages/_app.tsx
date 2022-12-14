import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import React, { useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>Yuta&apos;s Profile</title>
      </Head>

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
          <AnimatePresence>
            <Layout>
              <DefaultSeo {...SEO} />
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
