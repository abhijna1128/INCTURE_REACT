import UseCounter from "./UseCounter";

function FirstCounter(){
    const {count,increment,decrement,reset}=UseCounter(10);


return(
    <div>
        <h1>First counter</h1><br></br>
        <h2>Count:{count}</h2><br></br>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    </div>
)
} 
export default FirstCounter;