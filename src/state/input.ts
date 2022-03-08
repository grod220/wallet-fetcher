import { atom } from 'recoil';

export const inputTextAtom = atom<string>({
  key: 'inputText',
  default: '',
});

export const submittedAddressAtom = atom<string | undefined>({
  key: 'submittedAddress',
  default: undefined,
});
