import { UserContext } from "./UserContext";
import { useContext } from "react";
function ThirdContext(){
    const username=useContext(UserContext);
    return(
        <div>
            <h2>Third Component:</h2>
            <h2>welcome:{username}</h2>
        </div>
    )
}
export default ThirdContext;
