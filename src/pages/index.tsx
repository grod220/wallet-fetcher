import React, { FC } from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AddressInput } from '../components/AddressInput';
import { EthBalance } from '../components/EthBalance';
import { GuardianCount } from '../components/GuardianCount';
import { TokenBalances } from '../components/TokenBalances';

const queryClient = new QueryClient();

const Index: FC = () => {
  return (
    <div>
      <Head>
        <title>Argent Screener</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AddressInput />
          <EthBalance />
          <GuardianCount />
          <TokenBalances />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
};

export default Index;
