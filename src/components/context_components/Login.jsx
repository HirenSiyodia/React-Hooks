import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import UserContext from "../../context/UserContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div>
      <h2>Login Here</h2>
      <input
        type="text"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        placeholder="password"
      />
      
      <button type="submit" onClick={handleSubmit}>
        Submit Please
      </button>
    </div>
  );
};

export default Login;
