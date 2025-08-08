import { useState,useEffect } from "react"
import axios from 'aXios';


const User3=()=>{
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        })

    },[])
     if(loading){
        return <p>Loading Users Details...please wait for sometime..</p>
    }if(error){
        return <p>Error:{error}</p>
    }
    return(
        <div>
            <h1>List with Axios</h1>
            {/* <button onClick={fetchData}>Fetch user List</button> */}
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>

    )

}
export default User3;
