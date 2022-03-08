import { ethers } from 'ethers';
import { guardianContractAbi } from './guardianContractAbi';

const NETWORK = 'mainnet';

export const provider = new ethers.providers.InfuraProvider(NETWORK, {
  projectId: process.env.INFURA_PROJECT_ID,
  projectSecret: process.env.INFURA_PROJECT_SECRET,
});

export const guardianContract = new ethers.Contract(
  '0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7',
  guardianContractAbi,
  provider,
);
