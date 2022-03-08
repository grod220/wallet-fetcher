import { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inputTextAtom, submittedAddressAtom } from '../state/input';

export const AddressInput: FC = () => {
  const [inputText, setInputText] = useRecoilState(inputTextAtom);
  const setSubmittedAddress = useSetRecoilState(submittedAddressAtom);

  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => setSubmittedAddress(inputText)}>submit</button>
    </div>
  );
};
