'use client';
import { Session } from 'next-auth';
import React, { createContext, useContext, useState } from 'react';
import { api } from '~/trpc/react';

const SessionContext = createContext<{
  data: Session | undefined | null;
  isLoading: boolean;
  login: (userData: any) => void;
  logout: () => void;
  refetch: () => void;
}>({
  data: undefined,
  isLoading: false,
  login: () => void 0,
  logout: () => void 0,
  refetch: () => void 0,
});

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export const AppSessionProvider = ({ children }) => {
  const [ session, setSession ] = useState({
    user: {
      name: 'Guest',
    },
  });
  // const { data, isLoading, refetch } = api.auth.getSession.useQuery(undefined, {
  //   // cacheTime: 10000,
  // });

  const data = null as Session | null;
  const isLoading = false;

  const refetchSession = async () => {
    console.log('refetching session');
    // await refetch();
  };

  const login = (userData) => {
    setSession(userData);
  };

  const logout = () => {
    setSession({
      user: {
        name: 'Guest',
      },
    });
  };

  const value = {
    data,
    isLoading,
    login,
    logout,
    refetch: refetchSession,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};
