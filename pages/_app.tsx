import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/paddle.js"
        onLoad={() => {
          Paddle.Setup({ vendor: 4124 });
          Paddle.Environment.set("sandbox");
        }}
      />
      <Head>
        <title>Voicl - Add voice widgets to your website ⚡️</title>
        <meta
          name="title"
          content="Voicl - Add voice widgets to your website ⚡️"
        />
        <meta
          name="description"
          content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"
        />
        -- Open Graph / Facebook --
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Voicl - Add voice widgets to your website ⚡️"
        />
        <meta
          property="og:description"
          content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"
        />
        <meta property="og:image" content="/OG-TAG-IMAGE_Voicl 2.0.png" />
        -- Twitter --
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Voicl - Add voice widgets to your website ⚡️"
        />
        <meta
          property="twitter:description"
          content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"
        />
        <meta property="twitter:image" content="/OG-TAG-IMAGE_Voicl 2.0.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
