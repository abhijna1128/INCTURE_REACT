import { useState } from "react";

function FirstComp(){
    const[count,setCount]=useState(0);
    // let count=0;
    function increment()
    {
        setCount(count+1);
        // count++;
        console.log(`Count: ${count}`);
    }
    console.log("Conmponent rendered...");
    return(
        
        <div>
            <h1>Functional component without state</h1>
            <h2>Count :{count}</h2>
            <button onClick={increment}>Increment</button>

        </div>
    )
}
export default FirstComp;