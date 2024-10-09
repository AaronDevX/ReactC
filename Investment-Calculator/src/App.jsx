import Header from "./components/Header.jsx";
import InputContainer from "./components/InputContainer.jsx";
import {useState} from "react";

let DEFAULT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

export default function App() {
  const [dataUpdated, setDataUpdated] = useState(DEFAULT_DATA);

  function UpdateData(name, value) {
    setDataUpdated((beforeData) => {
      return {
        ...beforeData,
        [name]: value
      }
    })
  }

  return (
    <>
      <Header />
      <InputContainer fn={UpdateData}/>
    </>
  )
}
