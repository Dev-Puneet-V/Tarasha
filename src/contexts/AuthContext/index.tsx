import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { GlobalProps } from '../../utils/type';
import { AuthContextType } from './type';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<GlobalProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{
    _id?: string;
    name?: string;
    email?: string;
  }>({})
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleAuthentication = () => {
    if((isAuthenticated && Cookies.get('token')) || isAuthenticated){
      Cookies.remove('token');
      setAuthenticated(false);
    }else if(Cookies.get('token')){
      setAuthenticated(true);
    }
  }

  return (
    <AuthContext.Provider value={{isAuthModalOpen, openAuthModal, closeAuthModal, isAuthenticated, handleAuthentication, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


