import { useMemo, useState } from "react";

function FifthComp(){
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(10);
    function expFunc(number){
        console.log("Expensive Function called...");
            for(let i=1;i<=100000;i++){
                return number*number;
            }
        }
        
    const result=useMemo(()=>expFunc(number),[number]);

    return(
        <div>
            <h1>Fifth Component:</h1><br></br>
            <h2>Result:{result}</h2><br></br>
            <h3>Count :{count}</h3><br></br>
            <button onClick={()=>setCount(count+1)}>Update Count</button><br></br><br></br>
            <h3>Number :{number}</h3><br></br>
            <button onClick={()=>setNumber(number+1)}>Update Number</button><br></br>
        </div>
    )

}
export default FifthComp;