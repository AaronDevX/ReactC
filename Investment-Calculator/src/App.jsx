import {useState} from "react";
import Header from "./components/Header.jsx";
import InputContainer from "./components/InputContainer.jsx";
import Results from "./components/Results.jsx";
import {calculateInvestmentResults} from "./util/investment.js";



let DEFAULT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

export default function App() {
  const [dataUpdated, setDataUpdated] = useState(DEFAULT_DATA);
  const investmentData = calculateInvestmentResults(dataUpdated);

  function UpdateData(name, value) {
    setDataUpdated((beforeData) => {
      return {
        ...beforeData,
        [name]: value
      }
    })
  }

  console.log(investmentData)



  return (
    <>
      <Header />
      <InputContainer fn={UpdateData}/>
      <Results data={investmentData}/>
    </>
  )
}
