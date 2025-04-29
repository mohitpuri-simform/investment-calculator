import { ChangeEvent } from "react";
import Input from "./Input";
import { ChooseInput } from "../../typesOfInputs.constant";

interface DetailInfoProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DetailInfo({ onChangeInput }: DetailInfoProps) {
  return (
    <div className="details-container">
      <Input
        inputID={ChooseInput.initialInvestment}
        inputLabel="Initial Investment"
        onChangeInput={onChangeInput}
      />

      <Input
        inputID={ChooseInput.annualInvestment}
        inputLabel="Annual Investment"
        onChangeInput={onChangeInput}
      />
      <Input
        inputID={ChooseInput.expectedReturn}
        inputLabel="Expected Return"
        onChangeInput={onChangeInput}
      />
      <Input
        inputID={ChooseInput.duration}
        inputLabel="Duration"
        onChangeInput={onChangeInput}
      />
    </div>
  );
}

export default DetailInfo;
