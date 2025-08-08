// import { useState } from 'react'

import './App.css'
import Data from './Data'
import PropComp from './PropComp'
import Button from './Button'
import Card from './Card'
import StateComp from './StateComp'
import FormComp from './FormComp'

function App() {
  // const [count, setCount] = useState(0)
  // const handleClick=()=>{
  //   alert("Button Clicked");
  // }
  return (
   <div>
    {/* <h1>This is my First Typescript app</h1>
     <h1>React With type script:</h1>
    <Data/> 
    <PropComp name="Abhi"/> 
    <Button label='Click' onClick={handleClick} />
    <Button label='Disabled Buttton' onClick={handleClick} disabled={true}/> */}
     <h1>React With type script:</h1>
    {/* <Card>
      <h3>card title</h3>
      <p> This is a simple card with custom styles.</p>
    </Card>
    <Card style={{background:'rgba(95, 126, 226, 0.87)',marginTop:'20px'}}>
      <h3>Style Card</h3>
      <p>Tis is card has a custom styles passed via props</p>
    </Card> */}
    {/* <StateComp/> */}
    <FormComp/>

   </div>

  )
}

export default App
