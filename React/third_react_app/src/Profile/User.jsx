import { useParams } from "react-router-dom";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
function User() {
  const { userName } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {userName}</p>

      {/* Optional: simulate additional data based on username */}
      {userName === "Abhi" ? <User1/> :userName === "Shree" ? <User2/>: userName === "Krithika" ? <User3/> :<h2>Guest compoennet</h2>}
    </div>
  );
}

export default User;
