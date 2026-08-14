import { createContext, useState } from "react";

export let Auth = createContext();

export const AuthContextProvider = ({ children }) => {

  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginUsers")),
  );

  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Auth.Provider
      value={{isLoading,setIsLoading , loginData,setLoginData, registerData, setRegisterData }}
    >
      {children}
    </Auth.Provider>
  );
};
