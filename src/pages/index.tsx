import React from 'react';
import {
  Footer,
  Header,
  Layout,
} from '@components/index';
import {
  Offer,
  Community,
  ApiDocs,
  QuickStart,
  Features,
  UseCases,
} from 'sections';

function Page() {
  return (
    <Layout
      title="Crypto payments for telegram bots"
      description="Seamlessly accept crypto payments in your Telegram bots and services."
    >
      <Header />

      <Offer />

      <UseCases />

      <Features />

      <QuickStart />

      <ApiDocs />

      <Community />

      <Footer />
    </Layout>
  );
}

export default Page;
