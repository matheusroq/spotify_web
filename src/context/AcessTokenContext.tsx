import React from 'react';
import { createContext, ReactNode } from 'react';

export const AccessTokenContext = createContext('');

interface AccessTokenContextProps {
  children: ReactNode;
  value: string;
}

export const AccessTokenProvider = ({
  children,
  value,
}: AccessTokenContextProps) => {
  return (
    <AccessTokenContext.Provider value={value}>
      {children}
    </AccessTokenContext.Provider>
  );
};
