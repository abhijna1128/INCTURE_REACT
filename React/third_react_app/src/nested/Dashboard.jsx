import { NavLink, Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h2>Dashbaord</h2>
            <nav>
                <NavLink to="profile" className={({isActive})=>isActive?"active-link":"link"}>Profile</NavLink>
                 <NavLink to="setting" className={({isActive})=>isActive?"active-link":"link"}>Setting</NavLink>
            </nav>
            <hr></hr>
            <Outlet/>
        </div>
    )
}
export default Dashboard;