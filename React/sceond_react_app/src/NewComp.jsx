import { useState } from "react";

function NewComp(){
    const [show,setShow]=useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "Hide text":"Show text"}
            </button>
            {show && 
            <div><p> This is my secret message.....</p>
            <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/featured-images/vite-errors.png"></img>
            </div>}
        </div>
    )

}
export default NewComp;
