// import { useState } from "react";

// function FirstEvent(){
//     const[text,setText]=useState('');
//     setText
//     const handleClick=(event)=>{
//         setText(event.target.value);
//     }
//     return(
//         <div>
//             <h2>React EVent:</h2>
//             {/* <button onClick={handleClick}>Click</button> */}
//             <input type="text" placeholder="Enter text" onChange={handleClick}/>
//             <p>Your text:{text}</p>
//         </div>
//     )
// }
// export default FirstEvent;

//form event

// const [name,setName]=useState('');
// const handleSubmit=()=>{
//     alert(`Form submitted by:${name}`)

// }
// return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <h2>Enter Name:</h2>
//             <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br></br>
//             <button type="submit">Submit</button>
//         </form>
//     </div>
// )
// }
// export default FirstEvent;

//mouse event
// const handleMouseEnter=()=>{
//     console.log("Mouse enetered...");
// }
// const handleMouseLeave=()=>{
//     console.loh("Mouseleft the box..");
// }
// return(
//     <div onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//     style={{
//         width:"200px",
//         height:"200px",
//         backgroundcolor:"blue",
//         textAlign:"center",
//         lineHeight:"200px"
//    } }>
//     Hover on me!
//         </div>

// )
// }
function FirstEvent(){
//     const greet=(name)=>{
//         alert(`welcome ${name} to react session `)
//     }
//     return(
//         <div>
//             <button onClick={()=>greet("abhi")}>Greet</button>
//         </div>
//     )

// }
// const handleKeyDown=(event)=>{
//     alert(`key pressed:${event.key}`);
// }
// return(
//     <div>
//         <h2>Type something:</h2>
//         <input type="text" onKeyDown={handleKeyDown}/>
//     </div>
// )
// }

const handleKeyDown=(event)=>{
    if(event.key==='Enter'){
       alert(`Welcome to react sesion`);
    }
    
}
return(
    <div>
        <h2>Type something:</h2>
        <input type="text" onKeyDown={handleKeyDown}/>
    </div>
)
}
export default FirstEvent;