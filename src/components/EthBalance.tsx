import { FC } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { submittedAddressAtom } from '../state/input';
import { fetchEthBalance } from '../fetchers';

export const EthBalance: FC = () => {
  const submittedAddress = useRecoilValue(submittedAddressAtom);

  const { data, isLoading, error } = useQuery(
    ['ethBalance', submittedAddress],
    fetchEthBalance(submittedAddress),
    {
      enabled: Boolean(submittedAddress),
    },
  );

  return (
    <div>
      <b>EthBalance:</b> {isLoading ? <span className="loading line" /> : error ? '❌' : data}
    </div>
  );
};
