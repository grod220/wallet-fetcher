import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { submittedAddressAtom } from '../state/input';
import { useQuery } from 'react-query';
import { fetchTokenBalances } from '../fetchers';
import { TokenBalance } from '../pages/api/token-balances/[address]';

export const TokenBalances: FC = () => {
  const submittedAddress = useRecoilValue(submittedAddressAtom);

  const { data, isLoading, error } = useQuery<TokenBalance[]>(
    ['tokenBalances', submittedAddress],
    fetchTokenBalances(submittedAddress),
    {
      enabled: Boolean(submittedAddress),
    },
  );

  return (
    <div>
      <div>Token balances:</div>
      {data?.map((token, i) => {
        return (
          <div key={i}>
            <div>{token.symbol}</div>
            <div>{token.amount}</div>
            <div>{token.price * token.amount}</div>
          </div>
        );
      })}
    </div>
  );
};
