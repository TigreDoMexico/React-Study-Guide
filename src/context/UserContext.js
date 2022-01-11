import React, { useState } from 'react'

const initialState = {
  userName: '',
  userEmail: ''
}

const UserContext = React.createContext();

export const UserProvider = ({ children, userData }) => {
  const [currentUserData, setCurrentUserData] = useState(userData || initialState);
  
  const saveUser = (data) => {
    setCurrentUserData(data)
  };
  
  return (
    <UserContext.Provider
      value={{ user: currentUserData, saveUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
  
export const UserConsumer = UserContext.Consumer;

export default UserContext