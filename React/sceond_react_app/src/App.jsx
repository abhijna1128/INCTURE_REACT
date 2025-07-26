// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import First from "./first.jsx"
// import Third from "./Third.jsx"
// import Fourth from "./Fourth.jsx"
import Card from "./card.jsx"
import Store from "./Store.jsx"
import Counter from "./Counter.jsx"
import NewComp from "./NewComp.jsx"
import Rendercomp from "./Rendercomp.jsx"
import FirstEvent from "./FirstEvent.jsx"
import FirstList from "./component/FirstList.jsx"
import SecList from "./component/SecList.jsx"
import EmployeeList from "./component/EmployeeList.jsx"
import CourseList from "./component/CourseList.jsx"
import TableList from "./component/TableList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from "./component/BootstrapTable.jsx"
import LifeCycleFirst from "./life_cycle_component/LifeCycleFirst.jsx"
import LifeCycleSecond from "./life_cycle_component/LifeCycleSecond.jsx"
import LifeCycleThird from "./life_cycle_component/LifeCyclethird.jsx"
import FirstComp from "./hooks/FirstComp.jsx"
import SecondComp from "./hooks/secondComp.jsx"
import ThirdComp from "./hooks/ThirdComp.jsx"
import FourthComp from "./hooks/FourthComp.jsx"
import FifthComp from "./hooks/FifthComp.jsx"
import Sixth from "./hooks/Sixth.jsx"
import Parent from "./hooks/Parent.jsx"
import FirstCounter from "./custom_hooks/FirstCounter.jsx"
import SecCounter from "./custom_hooks/SecCounter.jsx"
import ThirdCounter from "./custom_hooks/ThirdCounter.jsx"
import FirstContext from "./context/FirstContext.jsx"
import { UserContext } from "./context/UserContext.jsx"
import { ThemeProvider } from "./new_context/ThemeContext.jsx"
import ThemeToggleComponent from "./new_context/ThemeToggleComponent.jsx"

function App() {
  // const [count, setCount] = useState(0)
  const username="Abhijna";

   return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // function handleClick(){
    //   alert("Function from parent component:");
    // }
    // return (
    <div>
      {/* <h1> React app with vite</h1>
      <h2>Vite is fatser</h2>
      <Card label="Click me" onClick={handleClick}/> */}
      {/* <First/>
      <Third/>
      <Fourth/> */}
      {/* <Card name="Shree" city="Bantwal"/>
      <Card name="Krithika" city="Mangalore"/>
      <Card name="Krishna" city="Mura"/>
      <Card name="Sudeep" city="Belthangady"/> */}
      {/* <Store/> */}
      {/* <Counter/> */}
      {/* <NewComp/> */}
      {/* <Rendercomp/> */}
      {/* <FirstEvent/> */}
      {/* <FirstList/> */}
      {/* <SecList/> */}
      {/* <EmployeeList/> */}
      {/* <CourseList/> */}
      {/* <TableList/> */}
      {/* <BootstrapTable/> */}
      {/* <LifeCycleFirst/> */}
      {/* <LifeCycleSecond/> */}
      {/* <LifeCycleThird/> */}
      {/* <FirstComp/> */}
      {/* <SecondComp/> */}
      {/* <ThirdComp/> */}
      {/* <FourthComp/> */}
      {/* <FifthComp/> */}
      {/* <Sixth/> */}
      {/* <Parent/> */}
      {/* <FirstCounter/><br></br>
      <SecCounter/><br></br>
      <ThirdCounter/> */}
      {/* <FirstContext username={username}/> */}
      {/* <UserContext.Provider value={username}>
        <div>
          <FirstContext/>
        </div>
      </UserContext.Provider> */}
      <ThemeProvider>
        <h1>theme toggle app</h1>
        <ThemeToggleComponent/>
      </ThemeProvider>


    </div>
   )
}

export default App
