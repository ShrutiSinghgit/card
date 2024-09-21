import { useState } from 'react'
import './App.css'

import SuccessfulCard from './Components/SuccessfulCard'
//import UnsuccessfullCard from './Components/UnsuccessfullCard'
import ErrorOccuredCard from './Components/ErrorOccuredCard'
//import WaitingCard from './Components/WaitingCard'
import CheckedInCard from './Components/CheckedInCard'
import CheckedOutCard from './Components/CheckedOutCard'
import ArrivalCard from './Components/ArrivalCard' 

function App() {
  return (
    <div>
      <div>
        <SuccessfulCard/>
      </div>
      <br/>
      <div>
        <ErrorOccuredCard/>
      </div>
      <br/>
      <div>
        <CheckedInCard/>
      </div>
      <br/>
      <div>
        <CheckedOutCard/>
      </div>
      <br/>
      <div>
        <ArrivalCard/> 
      </div>
    </div>
  )
}

export default App