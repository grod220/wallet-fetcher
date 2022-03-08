export const fetchGuardianCount = (address: string | undefined) => async () => {
  const res = await fetch(`/api/guardian-count/${address}`);
  return await res.text();
};

export const fetchEthBalance = (address: string | undefined) => async () => {
  const res = await fetch(`/api/eth-balance/${address}`);
  return await res.text();
};

export const fetchTokenBalances = (address: string | undefined) => async () => {
  const res = await fetch(`/api/token-balances/${address}`);
  return await res.json();
};
