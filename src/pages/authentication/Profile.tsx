import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "./auth";

const Profile = () => {
  //   const auth = useAuth();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      {auth.user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Profile;
