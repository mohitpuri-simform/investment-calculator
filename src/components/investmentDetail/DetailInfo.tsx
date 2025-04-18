import { ChangeEvent } from "react";
import Input from "./Input";

interface DetailInfoProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DetailInfo({ onChangeInput }: DetailInfoProps) {
  return (
    <div className="details-container">
      <Input
        inputID="initialInvestment"
        inputLabel="Initial Investment"
        onChangeInput={onChangeInput}
      />

      <Input
        inputID="annualInvestment"
        inputLabel="Annual Investment"
        onChangeInput={onChangeInput}
      />
      <Input
        inputID="expectedReturn"
        inputLabel="Expected Return"
        onChangeInput={onChangeInput}
      />
      <Input
        inputID="duration"
        inputLabel="Duration"
        onChangeInput={onChangeInput}
      />
    </div>
  );
}

export default DetailInfo;
