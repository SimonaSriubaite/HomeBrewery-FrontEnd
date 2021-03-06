import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function clearLocalStorage() {
  localStorage.removeItem("token");
}

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  localStorage.setItem("token", token);

  return (
    <AuthContext.Provider value={{ token, setToken, clearLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
