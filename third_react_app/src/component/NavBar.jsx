import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ margin: '20px' }}>
      <NavLink to="/user/Abhi" style={{ marginRight: '15px' }}>Abhi's Profile</NavLink>
      <NavLink to="/user/Shree" style={{ marginRight: '15px' }}>Shree's Profile</NavLink>
      <NavLink to="/user/Krithika" style={{ marginRight: '15px' }}>Krithika's Profile</NavLink>
    </nav>
  );
}

export default NavBar;
