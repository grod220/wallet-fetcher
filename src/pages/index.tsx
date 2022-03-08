import React, { FC } from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AddressInput } from '../components/AddressInput';
import { EthBalance } from '../components/EthBalance';
import { GuardianCount } from '../components/GuardianCount';
import { TokenBalances } from '../components/TokenBalances';
import styled from 'styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const Index: FC = () => {
  return (
    <div>
      <Head>
        <title>Argent Screener</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Container>
            <AddressInput />
            <EthBalance />
            <GuardianCount />
            <TokenBalances />
          </Container>
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
};

export default Index;
