import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUser } from "./userAction"


function Fetch(){
    const {users,loading,error}=useSelector(state=>state);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch]);
    if(loading){
        return <p>Loading Users Details...please wait for sometime..</p>
    }if(error){
        return <p>Error:{error}</p>
    }

    return(
        <div>
            <h2>users from API:</h2>
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
export default Fetch;