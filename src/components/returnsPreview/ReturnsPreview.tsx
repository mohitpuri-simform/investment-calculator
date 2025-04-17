interface ReturnsPreviewProps {
  initalInvestment: number;
  duration: number;
  annualInvestment: number;
  expectedReturn: number;
}

type AnnualData = {
  year: number;
  investmentValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}[];

function ReturnsPreview({
  initalInvestment,
  duration,
  annualInvestment,
  expectedReturn,
}: ReturnsPreviewProps) {
  function getResult(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ) {
    const annualData: AnnualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      if (i === 0) {
        annualData.push({
          year: i + 1,
          investmentValue: Math.ceil(investmentValue),
          interest: Math.ceil(interestEarnedInYear),
          totalInterest: Math.ceil(interestEarnedInYear),
          investedCapital: Math.ceil(initialInvestment + annualInvestment),
        });
      } else {
        annualData.push({
          year: i + 1,
          investmentValue: Math.ceil(investmentValue),
          interest: Math.ceil(interestEarnedInYear),
          totalInterest: Math.ceil(
            annualData[i - 1].interest + interestEarnedInYear
          ),
          investedCapital: Math.ceil(
            annualData[i - 1].investedCapital + annualInvestment
          ),
        });
      }
    }

    return annualData;
  }
  const returns: AnnualData = getResult(
    initalInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {returns.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.investmentValue}</td>
              <td>{item.interest}</td>
              <td>{item.totalInterest}</td>
              <td>{item.investedCapital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReturnsPreview;
