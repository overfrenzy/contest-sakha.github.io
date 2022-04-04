import Head from 'next/head';
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  