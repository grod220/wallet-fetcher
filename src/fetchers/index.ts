export const fetchGuardianCount = (address: string | undefined) => async () => {
  const res = await fetch(`/api/guardian-count/${address}`);
  const text = await res.text();
  if (res.status !== 200) {
    throw new Error(text);
  }
  return text;
};

export const fetchEthBalance = (address: string | undefined) => async () => {
  const res = await fetch(`/api/eth-balance/${address}`);
  const text = await res.text();
  if (res.status !== 200) {
    throw new Error(text);
  }
  return text;
};

export const fetchTokenBalances = (address: string | undefined) => async () => {
  const res = await fetch(`/api/token-balances/${address}`);
  return await res.json();
};
