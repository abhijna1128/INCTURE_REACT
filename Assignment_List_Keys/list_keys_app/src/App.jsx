import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameList from './component/NameList'
import NameList2 from './component/NameList2'
import 'bootstrap/dist/css/bootstrap.min.css';
import NameList3 from './component/NameList3'
import NameList4 from './component/NameList4'

function App() {

  return (
   
    <div>
      <NameList/>
      <NameList2/>
      <NameList3/>
      <NameList4/>
    </div>
  )
}

export default App;
