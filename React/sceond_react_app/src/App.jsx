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
import { useState,useEffect } from "react"

function App() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  useEffect(()=>{
    // sessionStorage.removeItem("username");
    const savedName=sessionStorage.getItem("username");
    if(savedName){
      setName(savedName);
    }
    // sessionStorage.removeItem("usermail");
    const savedMail=sessionStorage.getItem("usermail");
    if(savedMail){
      setMail(savedMail);
    }
    // sessionStorage.removeItem("usernumber");
    const savedNumber=sessionStorage.getItem("usernumber");
    if(savedNumber){
      setNumber(savedNumber);
    }
    // sessionStorage.removeItem("usergender");
    const savedGender=sessionStorage.getItem("usergender");
    if(savedGender){
      setGender(savedGender);
    }
    // sessionStorage.removeItem("usercity");
    const savedCity=sessionStorage.getItem("usercity");
    if(savedCity){
      setCity(savedCity);
    }

  },[]);
  const handleChange=(event)=>{
    setName(event.target.value);
    sessionStorage.setItem("username",event.target.value);
  }
  const handleMail=(event)=>{
    setMail(event.target.value);
    sessionStorage.setItem("usermail",event.target.value);
  }
  const handlePhone=(event)=>{
    setNumber(event.target.value);
    sessionStorage.setItem("usernumber",event.target.value);
  }
  const handleGender=(event)=>{
    setGender(event.target.value);
    sessionStorage.setItem("usergender",event.target.value);
  }
  const handleCity=(event)=>{
    setCity(event.target.value);
    sessionStorage.setItem("usercity",event.target.value);
  }

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
      {/* <ThemeProvider>
        <h1>theme toggle app</h1>
        <ThemeToggleComponent/>
      </ThemeProvider> */}
      <h2>Welcome:{name||"guest"}</h2>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter Name"/><br></br><br></br>
      <input type="email" value={email} onChange={handleMail} placeholder="Enter Email"/><br></br><br></br>
      <label><input type="checkbox" name="gender" value="Male" onChange={handleGender} checked={gender === "Male"}/> Male</label>
      <label><input type="checkbox" name="gender" value="Female" onChange={handleGender} checked={gender === "Female"}/> Female</label><br></br><br></br>
      <select value={city} onChange={handleCity}>
          <option>Select City</option>
          <option value="Mangalore">Mangalore</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
      </select><br></br><br></br>
      <input type="number" value={number} onChange={handlePhone} placeholder="Enter phone number"/>
      
    </div>
   )
}

export default App
