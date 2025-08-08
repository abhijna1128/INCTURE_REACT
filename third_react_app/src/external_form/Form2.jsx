
import {useFormik} from 'formik';
import * as Yup from 'yup'; 
const Form2=()=>{
    const validationSchema=Yup.object({
        name:Yup.string()
        .min(3,"Password must be at least 3 characters")
        .required("Name is required"),

        email:Yup.string()
        .email("Invalid emil address")
        .required("Email is required"),

        password:Yup.string()
        .min(6,"Password must be at least 6 characters")
        .required("Password is required"),

        confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
        
        gender:Yup.string()
        .required("gender is required"),
        
        city:Yup.string()
        .required("city is required"),

       conditions:Yup.string()
        .required("This must be accepted")


    
    });
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            gender:'',
            city:'',
            conditions:''
        },
        validationSchema: validationSchema,
        onSubmit:(values)=>{
            alert("Registration successful"+JSON.stringify(values,null,2));
        }
    });
    return(
        <div style={{maxWidth:'500px',margin:'auto',padding:'20px'}}>
            <h2>Register :</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom:'10px'}}>
                    <label>Name:</label>
                    <input 
                    type='text'
                    name='name'
                    value={formik.values.name}
                    placeholder='Enter Name'
                    onChange={formik.handleChange}/>
                    {formik.touched.name&&formik.errors.name&&(
                        <div style={{color:'red'}}>{formik.errors.name}</div>
                    )}

                </div>

            {/* email input */}
            <div style={{marginBottom:'10px'}}>
                    <label>Email:</label>
                    <input 
                    type='email'
                    name='email'
                    value={formik.values.email}
                    placeholder='Enter email'
                    onChange={formik.handleChange}/>
                    {formik.touched.email&&formik.errors.email&&(
                        <div style={{color:'red'}}>{formik.errors.email}</div>
                    )}

                </div>

                 {/* password input */}
            <div style={{marginBottom:'10px'}}>
                    <label>Password:</label>
                    <input 
                    type='password'
                    name='password'
                    value={formik.values.password}
                    placeholder='Enter password'
                    onChange={formik.handleChange}/>
                    {formik.touched.password&&formik.errors.password&&(
                        <div style={{color:'red'}}>{formik.errors.password}</div>
                    )}

                </div>
                   <div style={{marginBottom:'10px'}}>
                    <label>confirm password:</label>
                    <input 
                    type='password'
                    name='confirm_password'
                    value={formik.values.confirm_password}
                    placeholder='Confirm the password again'
                    onChange={formik.handleChange}/>
                    {formik.touched.confirm_password&&formik.errors.confirm_password&&(
                        <div style={{color:'red'}}>{formik.errors.confirm_password}</div>
                    )}

                </div>

                        {/* Gender */}
                        <div style={{ marginBottom: '10px' }}>
                        <label>Gender:</label><br />
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            checked={formik.values.gender === "Male"}
                            onChange={formik.handleChange}
                        />
                        <label> Male</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            checked={formik.values.gender === "Female"}
                            onChange={formik.handleChange}
                        />
                        <label> Female</label>
                        {formik.touched.gender && formik.errors.gender && (
                            <div style={{ color: 'red' }}>{formik.errors.gender}</div>
                        )}
                        </div>

                        {/* City */}
                        <div style={{ marginBottom: '10px' }}>
                        <label>City:</label>
                        <select
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}>
                            <option value="">Select City</option>
                            <option value="Mangalore">Mangalore</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        {formik.touched.city && formik.errors.city && (
                            <div style={{ color: 'red' }}>{formik.errors.city}</div>
                        )}
                        </div>
                        
                   <div style={{marginBottom:'10px'}}>
                    <input 
                    type='checkbox'
                    name='conditions'
                    value={formik.values.conditions}
                    onChange={formik.handleChange}/>
                    <label>*I agree to all the terms and conditions*</label>
                    {formik.touched.conditions&&formik.errors.conditions&&(
                        <div style={{color:'red'}}>{formik.errors.conditions}</div>
                    )}

                </div>
                <br></br>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form2;