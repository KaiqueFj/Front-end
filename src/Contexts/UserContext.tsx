import { createContext, ReactNode, useState } from 'react';


interface UserContextData {
  token: string;
  getToken: (tokenValue) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState('');

  function getToken(tokenValue) {
    setToken(tokenValue)
  }

  return (
    <UserContext.Provider
      value={{
        token,
        getToken
      }}
    >
      {children}
    </UserContext.Provider>
  )
}