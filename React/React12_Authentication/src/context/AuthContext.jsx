import { createContext, useState } from "react";

export const Auth = createContext(null);

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loginUsers")));

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
