import {useForm} from 'react-hook-form';

const Form3=()=>{
    const{
        register,
        handleSubmit,
        getValues,
        formState:{errors}
    }=useForm();
    const onSubmit=(data)=>{
        alert("Registration Successfull:"+JSON.stringify(data,null,2));
    };
    return(
        <div style={{maxWidth:'500px'}}>
            <h2>Regsitration Form:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{marginBottom:'15px'}}>
                    <label>Name:</label>
                    <input type='text'
                    {...register("name",{required:"Name is required",
                        minLength:{
                            value:3,
                            message: "Name should be minimum 3 characters"
                        }
                    })}
                    />
                    {errors.name &&<p style={{color:'red'}}>
                        {errors.name.message}</p>}
                </div>

                   <div style={{marginBottom:'15px'}}>
                    <label>Email</label>
                    <input type='email'
                    {...register("email",{required:"email is required",
                        pattern:{
                            value:/(.+)@(.+){2,}\.(.+){2,}/,
                            message:"Invalid email format"
                        }
                    })}
                    />
                    {errors.email &&<p style={{color:'red'}}>
                        {errors.email.message}</p>}
                </div>

                 <div style={{marginBottom:'15px'}}>
                    <label>Password</label>
                    <input type='password'
                    {...register("password",{required:"password is required",
                        minLength:{
                            value:6,
                            message: "Password must be atleast 10 characters"
                        }
                    })}
                    />
                    {errors.password &&<p style={{color:'red'}}>
                        {errors.password.message}</p>}
                </div>

                 <div style={{ marginBottom: "15px" }}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: value =>
                            value === getValues("password") || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && (
                        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                    )}
                    </div>

                 <div style={{ marginBottom: '15px' }}>
                        <label>Gender:</label><br />
                        <input type="radio" value="Male" {...register("gender", { required: "Gender is required" })} />
                        <label> Male </label>
                        <input type="radio" value="Female" {...register("gender", { required: "Gender is required" })} />
                        <label> Female </label>
                        {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
                        </div>
                            
                 <div style={{ marginBottom: '15px' }}>
                     <label>City:</label><br />
                     <select {...register("city", { required: "City is required" })}>
                     <option value="">-- Select a city --</option>
                     <option value="Mangaluru">Mangaluru</option>
                     <option value="Bengaluru">Bengaluru</option>
                     <option value="Pune">Pune</option>
                     <option value="Mumbai">Mumbai</option>
                    </select>
                    {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}
                </div>

                 <div style={{ marginBottom: '15px' }}>
                    <input
                        type="checkbox"
                        {...register("conditions", { required: "You must accept the terms and conditions" })}
                    />
                    <label> *I agree to all the terms and conditions* </label>
                    {errors.conditions && (
                        <div style={{ color: 'red' }}>{errors.conditions.message}</div> )}
                    </div>

                <button type='submit'>Registration</button>
            </form>
        </div>
    )
}
export default Form3;