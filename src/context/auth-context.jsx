import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage?.getItem("token");
    return token ? true : false;
  });
  const handleAuthenticate = () => {
    setIsAuthenticated((prev) => !prev);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
