import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';
import '../style/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
