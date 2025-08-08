import { useState } from "react";
import First from "./first.jsx"
import Third from "./Third.jsx"

function Rendercomp(){
    const [show,setShow]=useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "show 1st compoenent":"Show 2nd Component"}
            </button>
            {show && <First/>}
            {!show && <Third/>}
        </div>
    )

}
export default Rendercomp;
