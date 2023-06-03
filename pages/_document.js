import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Konnexions" />
        <link rel="icon" href="/logos/grplogo.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Konnexions" />
        <meta name="application-name" content="Konnexions" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta property="og:title" content="Konnexions" />
        <meta property="og:description" content="Konnexions" />
        <meta property="og:image" content="/logos/grplogo.png" />
        <meta property="og:url" content="https://konnexions-vbc.vercel.app/" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
