import { Urbanist } from '@next/font/google';
import { NinetailedProvider } from '@ninetailed/experience.js-next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import './utils/globals.css';
import { Layout } from '@src/components/templates/layout';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  const ninetailedClientId = process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID;
  if (!ninetailedClientId) {
    throw new Error('Missing Ninetailed Client Id. Please add it to you .env');
  }
  return (
    <NinetailedProvider clientId={ninetailedClientId}>
      <main className={`${urbanist.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <div id="portal" className={`${urbanist.variable} font-sans`} />
    </NinetailedProvider>
  );
};

export default appWithTranslation(App);
