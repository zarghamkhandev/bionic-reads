import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
<title>Voicl - Add voice widgets to your website ⚡️</title>
<meta name="title" content="Voicl - Add voice widgets to your website ⚡️"/>
<meta name="description" content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"/>

-- Open Graph / Facebook --
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://metatags.io/"/>
<meta property="og:title" content="Voicl - Add voice widgets to your website ⚡️"/>
<meta property="og:description" content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"/>
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

-- Twitter --
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://metatags.io/"/>
<meta property="twitter:title" content="Voicl - Add voice widgets to your website ⚡️"/>
<meta property="twitter:description" content="Increase conversions and website engagement by speaking to your audience directly. Improve your business through direct spoken feedback.🔊"/>
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/></Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
