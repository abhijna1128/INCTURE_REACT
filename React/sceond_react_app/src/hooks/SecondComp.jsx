import { useEffect } from "react"

function SecondComp(){

    useEffect(()=>{
        console.group("useEffect called...");
    },[])
    return(
        <div>
            <h1>Second Component with useEffect hook:</h1>
        </div>
    )
}
export default SecondComp;
