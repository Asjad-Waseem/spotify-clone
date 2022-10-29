import React from "react";
import "./Home.css";
// import { useHistory } from "react-router-dom";
// export default function Home() {
//   const history = useHistory();
//   const login = () => {
//     history.push("/login");
//     // return <Redirect to="/login" />;
//   };
//   const signup = () => {
//     history.push("/signup");
//     // return <Redirect to="/signup" />;
//   };
//   return (
//     <div>
//       <button onClick={login}>Back To Login</button>
//       <button onClick={signup}>Back To SignUp</button>
//     </div>
//   );
// }

function Home() {
  return (
    <div className="Home">
      <h1>Starting the flow</h1>
    </div>
  );
}

export default Home;
