import React from "react";

import "@/styles/global.css";
import { setup } from "goober";
import { prefix } from "goober-autoprefixer";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import GlobalStyles from "@/styles/GlobalStyles";

setup(React.createElement, prefix);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <main className="container flex flex-col justify-center items-center min-h-screen">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
