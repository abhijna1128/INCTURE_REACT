import { useState } from "react";

function Counter()
{
    // const[count,setCount]=useState(0);
    // function update(){
    //     setCount(count+1);
    // }

    const[count,setCount]=useState(10);
    console.log("...................................................");

    
    return(
        <div>
            <h2>Counter: {count}</h2>
            {/* <button onClick={update}>Increment</button> */}
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default Counter;
