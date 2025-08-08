import { useRef } from "react";

function Sixth(){
    const inputRef=useRef();
    function focus(){
        // let input_obj=document.getElementById("input");//not a good practice
        // input_obj.focus();
        inputRef.current.focus();
        inputRef.current.value="React";
        inputRef.current.style.color="green";
        inputRef.current.style.fontStyle="Italic";
        inputRef.current.style.backgroundColor="lavender";
    }
    return(
        <div>
            <h1>Sixth Component</h1><br></br>
            <input type="text" ref={inputRef}/><br></br><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default Sixth;