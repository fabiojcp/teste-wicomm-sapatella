import React from "react";

import { setup } from "goober";
import { prefix } from "goober-autoprefixer";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import GlobalStyles from "@/styles/GlobalStyles";

import "@/styles/swiperStyles.css"

setup(React.createElement, prefix);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
