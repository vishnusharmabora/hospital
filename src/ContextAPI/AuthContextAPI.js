import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
const parseUser = () => {
  try {
    const user = localStorage.getItem("authUserData");
    return (user && typeof user === "string" && JSON.parse(user)) || null;
  } catch (error) {
    return null;
  }
};
const AuthContextAPI = ({ children }) => {
  const [currUserData, setCurrUserData] = useState(() => {
    return parseUser();
  });

  useEffect(() => {
    const authUserData = parseUser();
    if (authUserData) {
      setCurrUserData(authUserData);
    } else {
      setCurrUserData(null);
    }
  }, []);

  const userLogin = (userData) => {
    if (userData) {
      localStorage.setItem("authUserData", JSON.stringify(userData));
      setCurrUserData(userData);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    setCurrUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ currUserData, doLogin: userLogin, doLogout: userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextAPI;
