import { useRef } from "react";

function SecForm(){
    const nameRef=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name:${nameRef.current.value}`)
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef}/><br></br>
        <button type="submit">Submit</button><br></br>
        </form>
        </div>
    
    )
}
export default SecForm;