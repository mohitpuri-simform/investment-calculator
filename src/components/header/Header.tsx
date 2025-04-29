import headerImg from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <>
      <header id="header">
        <img src={headerImg} alt="header" />
        <h2>Investment Calculator</h2>
      </header>
    </>
  );
}

export default Header;
