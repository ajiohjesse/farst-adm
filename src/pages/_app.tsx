import NextProgress from 'next-progress';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress delay={300} options={{ showSpinner: false }} height='4px' />
      <Component {...pageProps} />
    </>
  );
}
