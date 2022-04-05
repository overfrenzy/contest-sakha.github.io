import Head from "next/head";
import "../styles.css";

const fonts1_url = "https://fonts.gstatic.com";
const fonts2_url = "https://fonts.googleapis.com";
const family1 = "Roboto:wght@300;400;700";
const fonts3_url = fonts2_url + "/css2?family=" + family1 + "&display=swap";
const family2 = "Material+Icons";
const fonts4_url = fonts2_url + "/icon?family=" + family2;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Олимпиды по программированию РС(Я)</title>
        <link rel="preconnect" href={fonts1_url} crossOrigin="true" />
        <link rel="preconnect" href={fonts2_url} />
        <link rel="stylesheet" href={fonts3_url} />
        <link rel="stylesheet" href={fonts4_url} />
        <link rel="icon" href="/favicon16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
