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
      <div>
        <b>Token Balances:</b> {isLoading ? <span className="loading line" /> : error ? '❌' : null}
      </div>
      {data &&
        data.map((token, i) => {
          return (
            <div key={i}>
              <div>
                <b>{token.symbol}</b> - {token.amount.toFixed(5)} - $
                {(token.price * token.amount).toFixed(2)}
              </div>
            </div>
          );
        })}
    </div>
  );
};
