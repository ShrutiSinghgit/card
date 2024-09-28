import { useState } from 'react'
import './App.css'

  import SuccessfulCard from './Components/SuccessfulCard'
  import CheckingCard from './Components/CheckingCard'
   import  ErrorOccuredCard from './Components/ErrorOccuredCard'
 import  WaitingCard  from './Components/WaitingCard'
 import  CheckoutCard  from './Components/CheckoutCard'
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
  <CheckingCard/>
</div>
<br/>
<br/>
<div>
  <CheckoutCard/>
</div>
<br/>




<div>
  <WaitingCard/>
</div>

<div>
  <checking/>
</div>

  </div>
 )
}

export default App
