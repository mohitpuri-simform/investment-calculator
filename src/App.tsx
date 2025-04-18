import { ChangeEvent, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import DetailInfo from "./components/investmentDetail/DetailInfo";
import ReturnsPreview from "./components/returnsPreview/ReturnsPreview";

enum ChooseInput {
  initialInvestment = "initialInvestment",
  annualInvestment = "annualInvestment",
  expectedReturn = "expectedReturn",
  duration = "duration",
}

function App() {
  const [initalInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const ID = e.target.id;
    switch (ID) {
      case ChooseInput.initialInvestment:
        setInitialInvestment(+e.target.value);
        break;
      case ChooseInput.annualInvestment:
        setAnnualInvestment(+e.target.value);
        break;
      case ChooseInput.expectedReturn:
        setExpectedReturn(+e.target.value);
        break;
      case ChooseInput.duration:
        setDuration(+e.target.value);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header />
      <DetailInfo onChangeInput={handleInputChange} />
      <ReturnsPreview
        initalInvestment={initalInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;
