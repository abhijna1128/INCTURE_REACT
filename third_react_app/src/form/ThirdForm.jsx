import { useState } from "react";

function ThirdForm(){
    const [formData,setFormData]=useState({
        name:'',
        email:''
    });
     const [errors,setErrors]=useState({}); 
     const handleChange=(event)=>{
        setFormData({
        ...formData,
        [event.target.name]:event.target.value
        });
    };
    const validate=()=>{
        let errorList={};
        if(!formData.name.trim())
        {
            errorList.name="Name is required..."
        }
        if(!formData.email.trim())
        {
            errorList.name="email is required..."
        }else if(!/(.+)@(.+){2,}\.(.+){2,}/.test(formData.email)){
            errorList.name="email is invalid.."
        }
        return errorList;

    };

    const handleSubmit=(event)=>{
    event.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);

        if(Object.keys(validateErrors).length===0)
        {
            alert(`Name:${formData.name},Email:${formData.email}`)
        }

};
   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="name" type="text" placeholder="Enter name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
                </div><br></br>
                 <div>
                    <input name="email" type="email" placeholder="Enteremail" value={formData.email} onChange={handleChange}/>
                    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                </div>
                <button type="submit">Submit</button><br></br>
            </form>
        </div>
    )
}
export default ThirdForm;