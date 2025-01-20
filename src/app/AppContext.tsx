import React from 'react';
import { UserT } from 'src/types/user';
import useLocalStorage from 'src/hooks/useLocalStorage';

interface AppContextProps {
  user: {
    info: UserT;
    setUser: (user: UserT) => void;
    logoutUser: () => void;
  };
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = React.createContext<AppContextProps | null>(null);
AppContext.displayName = 'AppContext';

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [info, setUser, logoutUser] = useLocalStorage<UserT>('user', undefined);

  const contextValue: AppContextProps = React.useMemo(() => {
    return {
      user: {
        info,
        setUser,
        logoutUser,
      },
    };
  }, [info, setUser, logoutUser]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  const context = React.useContext(AppContext);
  if (!context)
    throw new Error('AppContext should be used inside the Provider');
  return context;
};

export { AppProvider, useAppContext };
