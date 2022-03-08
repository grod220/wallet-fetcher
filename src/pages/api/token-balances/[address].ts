import { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();

interface DebankTokenData {
  id: string;
  chain: string;
  name: string | null;
  symbol: string | null;
  display_symbol: string | null;
  optimized_symbol: string | null;
  decimals: number | null;
  logo_url: string | null;
  protocol_id: string;
  price: number;
  is_verified: boolean;
  is_core: boolean;
  is_wallet: boolean;
  time_at: number;
  amount: number;
  raw_amount: number;
}

export type TokenBalance = Pick<DebankTokenData, 'amount' | 'symbol' | 'price'>;

const getDebankUrl = (address: string): string => {
  const baseUrl = new URL('https://pro-openapi.debank.com/v1/user/token_list');
  const params = {
    id: address,
    chain_id: 'eth',
    is_all: 'false',
    has_balance: 'true',
  };
  return `${baseUrl}?${new URLSearchParams(params)}`;
};

const getTokenBalances = async (address: string) => {
  const response = await fetch(getDebankUrl(address), {
    headers: { AccessKey: process.env.DEBANK_ACCESS_KEY! },
  });
  const data = (await response.json()) as DebankTokenData[];
  return data.map<TokenBalance>(({ amount, symbol, price }) => ({ amount, symbol, price }));
};

export default async ({ query: { address } }: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof address !== 'string') {
      throw new Error('incorrect parameter');
    }
    const balance = await getTokenBalances(address);
    res.status(200).send(balance);
  } catch (e) {
    res.status(500).send(`Exception: ${e}`);
  }
};
