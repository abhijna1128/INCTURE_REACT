import { useState } from "react";

function UseCounter(initialValue=5){
    const[count,setCount]=useState(initialValue);

    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const reset=()=>setCount(initialValue);

    return{count,increment,decrement,reset};
}
export default UseCounter;
