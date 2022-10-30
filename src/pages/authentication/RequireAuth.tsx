import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

type RequireAuthProps = {
  children: any; //React.ReactNode;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const auth = useAuth();
  //  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!auth.user) {
  //     const myTimeout = setTimeout(() => {
  //       navigate("/login");
  //     }, 1000);
  //   }
  // });

  if (!auth.user) {
    return (
      <>
        {/* <div>Merhaba, login olunuz. Login sayfasına yönlendirliyorsunuz...</div> */}
        <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
      </>
    );
  }
  return children;
};

export default RequireAuth;
