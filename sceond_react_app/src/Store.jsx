import { useState } from "react";

function Store(){
    //let data=10;
    const [data,setData]=useState(10);
    function updateData(){
        setData(20);
        // data=20;
        alert(`Data: ${data}`);
    }
console.log("...........................................................................................");
    return(
        <div>
            <h2>Store compoenent:</h2>
            <h3>Data: {data}</h3>
            <button onClick={updateData}>Update data</button>
        </div>
    )
}
export default Store;