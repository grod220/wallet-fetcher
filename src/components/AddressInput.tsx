import { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inputTextAtom, submittedAddressAtom } from '../state/input';
import styled from 'styled-components';

const InputBox = styled.input`
  width: 300px;
  padding: 5px;
  margin-right: 10px;
  font-family: 'Courier New', sans-serif;
`;

const SubmitButton = styled.button`
  padding: 5px;
  font-family: 'Courier New', sans-serif;
`;

export const AddressInput: FC = () => {
  const [inputText, setInputText] = useRecoilState(inputTextAtom);
  const setSubmittedAddress = useSetRecoilState(submittedAddressAtom);

  return (
    <div>
      <div>
        <b>Enter your address:</b>
      </div>
      <InputBox type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <SubmitButton onClick={() => setSubmittedAddress(inputText)}> submit </SubmitButton>
    </div>
  );
};
