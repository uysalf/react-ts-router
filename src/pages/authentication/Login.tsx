import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext, useAuth } from "./auth";
const Login = () => {
  const [user, setUser] = useState("");
  //const auth = useAuth();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location:", location);
  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
    // navigate("/", { replace: true }); //replace:true browser'da geri butonuna bastığında tekrar bu sayfaya gelmesin
  };
  return (
    <div>
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
