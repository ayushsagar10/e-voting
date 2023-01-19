import React, { useContext, useState, useEffect } from "react";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState(0);

  return (
    <UserContext.Provider value={{ id, setId }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
