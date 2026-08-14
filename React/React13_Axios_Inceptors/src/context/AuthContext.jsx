import { createContext, useState } from "react";

export let Auth = createContext();

export const AuthContextProvider = ({ children }) => {
    
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginUsers")),
  );

  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );

  return (
    <Auth.Provider
      value={{ loginData, setLoginData, registerData, setRegisterData }}
    >
      {children}
    </Auth.Provider>
  );
};
