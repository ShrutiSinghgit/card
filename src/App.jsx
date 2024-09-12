import { useState } from 'react'
import './App.css'

  import SuccessfulCard from './Components/SuccessfulCard'
  import UnsuccessfullCard from './Components/UnsuccessfullCard'
   import  ErrorOccuredCard from './Components/ErrorOccuredCard'
 import  WaitingCard  from './Components/WaitingCard'
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
  <UnsuccessfullCard/>
</div>
<br/>




<div>
  <WaitingCard/>
</div>

  </div>
 )
}

export default App
