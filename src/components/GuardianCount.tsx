import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { submittedAddressAtom } from '../state/input';
import { useQuery } from 'react-query';
import { fetchGuardianCount } from '../fetchers';

export const GuardianCount: FC = () => {
  const submittedAddress = useRecoilValue(submittedAddressAtom);

  const { data, isLoading, error } = useQuery(
    ['guardianCount', submittedAddress],
    fetchGuardianCount(submittedAddress),
    {
      enabled: Boolean(submittedAddress),
    },
  );
  return <div>GuardianCount: {data}</div>;
};
