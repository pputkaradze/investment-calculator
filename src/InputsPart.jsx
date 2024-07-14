function InputPart({onChange,userInput}){
    
   
    return(
      <>
      <div className='user-input'>
          <div className='input-group'>
              <p>
                <label htmlFor="initial">Initial Invesmnet</label>
                <input type="number"  required value={userInput.initialInvestment} onChange={(event)=>onChange('initialInvestment' , event.target.value)}/>
              </p>
  
              <p>
                <label htmlFor="annual">Annual Investment</label>
                <input type="number"   required value={userInput.annualInvestment} onChange={(event)=>onChange('annualInvestment' , event.target.value)}/>
              </p>
          </div>
  
          <div className='input-group'>
              <p>
                <label htmlFor="expected-return">Expected Return</label>
                <input type="number"   required value={userInput.expectedReturn} onChange={(event)=>onChange('expectedReturn' , event.target.value)}/>
              </p>
  
              <p>
                <label htmlFor="duration">Duration</label>
                <input type="number"   required value={userInput.duration} onChange={(event)=>onChange('duration' , event.target.value)}/>
              </p>
          </div>
      </div> 
      
  
      </>
     
    )
  }
  
  export default InputPart