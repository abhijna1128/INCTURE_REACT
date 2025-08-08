import logo from './logo.svg';
import './App.css';
import First from "./First.js"
import Second from "./Second.js"
import Third from "./Third.js"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <h1>Helloo!!!!</h1>
    <p> This is my react app</p>
    <First/>
    <Second/>
    <Third/>

    </div>
  );
}

export default App;
