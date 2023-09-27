import React from 'react';
import { Footer, Header, Layout } from '@components/index';
import { Community, Api } from 'screens';

function Page() {
  return (
    <Layout
      title="Crypto payments for telegram bots"
      description="Seamlessly accept crypto payments in your Telegram bots and services."
    >
      <Header />

      <Api />

      <Community />

      <Footer />
    </Layout>
  );
}

export default Page;
