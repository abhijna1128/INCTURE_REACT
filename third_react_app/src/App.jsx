import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./component/Home";
// import Profile from "./component/Profile";
import NavBar from "./component/NavBar";
import Error from "./component/Error";
import User from "./Profile/User";
import "./app.css"
import Profile from "./nested/Profile";
import Dashboard from "./nested/Dashboard";
import Setting from "./nested/Setting";
import Product from "./nested/Product";
import FirstForm from "./form/FirstForm";
import SecForm from "./form/SecForm";
import ThirdForm from "./form/ThirdForm";
import Form1 from "./form/Form1";

function App() {
  return (
    // <BrowserRouter>
    //   {/* <nav style={{ margin: '20px' }}></nav> */}
    //     {/* <NavLink 
    //       to="/" 
    //       style={({ isActive }) => ({
    //         marginRight: '15px',
    //         color: isActive ? 'green' : 'blue',
    //         fontWeight: isActive ? 'bold' : 'normal'
    //       })}
    //     >
    //       Home
    //     </NavLink>

    //     <NavLink 
    //       to="/profile" 
    //       style={({ isActive }) => ({
    //         marginRight: '15px',
    //         color: isActive ? 'green' : 'blue',
    //         fontWeight: isActive ? 'bold' : 'normal'
    //       })}
    //     >
    //       Profile
    //     </NavLink> */}
    //   {/* <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>Home</NavLink>
    //   <NavLink to="/profile" className={({isActive})=>isActive?"active-link link":"link"}>Profile</NavLink> */}


    //   {/* <NavBar /> */}

    //   {/* <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/user/:userName" element={<User />} />
    //     <Route path="/home" element={<Navigate to="/" />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes> */}
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/product" element={<Product/>}/>

    //      <Route path="/dashboard" element={<Dashboard />}>
    //     <Route path="profile" element={<Profile />} />
    //     <Route path="setting" element={<Setting />} />
    //   </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
     <h1>Form handling</h1>
       {/* <FirstForm/> */}
      {/* <SecForm/> */}
      {/* <ThirdForm/> */}
      <Form1/>

    </div>
  );
}

export default App;
