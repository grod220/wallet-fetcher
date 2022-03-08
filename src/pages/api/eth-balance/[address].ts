import { NextApiRequest, NextApiResponse } from 'next';
import { provider } from '../../../chain/config';
import { ethers } from 'ethers';

require('dotenv').config();

const getEthBalance = async (address: string) => {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};

export default async ({ query: { address } }: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof address !== 'string') {
      throw new Error('incorrect parameter');
    }
    const balance = await getEthBalance(address);
    res.status(200).send(balance);
  } catch (e) {
    res.status(500).send(`Exception: ${e}`);
  }
};
