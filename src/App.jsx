import { useState } from 'react'
import invastImg from './assets/investment-calculator-logo.png'
import ResultsHeader from './ResultsHeader'
import InputPart from './InputsPart'



function App() {
  const [userInput,setUserInputs] = useState ({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier,newValue){
    setUserInputs(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier] : +newValue
      };
    });
  }


  console.log(userInput)
  return (
    <>
    <Header></Header>
    <InputPart onChange = {handleChange} userInput={userInput}></InputPart>
    {!inputIsValid && <p className='center'>Please Enter A duration Greater Than zero</p>}
    {inputIsValid && <ResultsHeader input={userInput}></ResultsHeader>}
    </>
    
  )
}




function Header() {
  return(
    <header className='header'>
        <img src={invastImg}></img>
        <h1>React Investment Calculator</h1>
    </header>
    
  )
}



 



export default App
