import { useState } from "react";

function FirstForm(){
    const [formData,setFormData]=useState({
        name:'',
        email:''
    });
    const handleChange=(event)=>{
        const{name,value}=event.target;
    
    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }));
};
const handleSubmit=((event)=>{
    event.preventDefault(); 
    // console.log("First Form compoennet rendered...")
alert(`Name:${formData.name},Email:${formData.email}`)
})
    
    return(
        <div>
           
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Enter name" onChange={handleChange}/><br></br>
                <input name="email" type="email" placeholder="Enter email" onChange={handleChange}/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FirstForm;