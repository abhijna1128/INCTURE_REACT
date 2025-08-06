import { useState,useEffect } from "react"


function User2(){
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
     const fetchData=()=>{fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        })
    }
    if(error){
        return <p>Error:{error}</p>
    }

    

    return(
        <div>
            <h1>Fetch User List</h1>
            <button onClick={fetchData}>Fetch user List</button>
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
export default User2;