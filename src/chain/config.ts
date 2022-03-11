import { ethers } from 'ethers';
import { guardianContractAbi } from './guardianContractAbi';

const NETWORK = 'homestead';

export const provider = new ethers.providers.AlchemyProvider(NETWORK, process.env.ALCHEMY_API_KEY);

export const guardianContract = new ethers.Contract(
  '0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7',
  guardianContractAbi,
  provider,
);
