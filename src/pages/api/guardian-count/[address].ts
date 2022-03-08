import { NextApiRequest, NextApiResponse } from 'next';
import { guardianContract } from '../../../chain/config';

require('dotenv').config();

const getGuardianCount = async (address: string) => {
  const guardianCount = await guardianContract.guardianCount(address);
  return guardianCount.toNumber();
};

const guardianCountRoute = async ({ query: { address } }: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof address !== 'string') {
      throw new Error('incorrect parameter');
    }
    const count = await getGuardianCount(address);
    res.status(200).send(count);
  } catch (e) {
    res.status(500).send(`Exception: ${e}`);
  }
};

export default guardianCountRoute;
