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
function App() {
  // const [count, setCount] = useState(0)

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
      <Rendercomp/>

    </div>
   )
}

export default App
