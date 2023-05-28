import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("accessToken"));
  const [token, setToken] = useState(localData);

  useEffect(() => {
    if (token) {
      return localStorage.setItem("accessToken", JSON.stringify(token));
    }

    localStorage.removeItem("accessToken");
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
