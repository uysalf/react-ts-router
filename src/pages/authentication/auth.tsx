import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext<any>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

// export type AuthUser = {
//   name: string;
//   email: string;
// };

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  const login = (user: any) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
