import { ChangeEvent } from "react";

interface InputProps {
  inputID: string;
  inputLabel: string;

  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ inputID, inputLabel, onChangeInput }: InputProps) {
  return (
    <div className="user-input">
      <label htmlFor={inputID}>{inputLabel}</label>
      <input type="number" id={inputID} onChange={onChangeInput} />
    </div>
  );
}

export default Input;
