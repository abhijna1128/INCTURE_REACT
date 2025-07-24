import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycle1 from './assets/life_cycle_component/LifeCycle1'
import LifeCycle2 from './assets/life_cycle_component/LifeCycle2'
import LifeCycle3 from './assets/life_cycle_component/LifeCycle3'
import ParentComp from './assets/life_cycle_component/ParentComp'

function App() {
  return (
   <div>
    <LifeCycle1/><br></br>
    <LifeCycle2/><br></br>
     <ParentComp/><br></br>
    <LifeCycle3/><br></br>
   
   </div>
  )
}

export default App
