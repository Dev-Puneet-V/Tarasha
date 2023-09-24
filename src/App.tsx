import React from 'react';
import './App.css'
import Navigation from './Navigation';
import Auth from './components/Auth';
import { useAuth } from './contexts/AuthContext';

function App() {
  const {handleAuthentication, isAuthModalOpen } = useAuth();
  React.useEffect(() => {
    handleAuthentication();
  }, [])
  return (
      <>
        <Navigation />
        {
          isAuthModalOpen &&
          <Auth />
        }
      </>
  )
}

export default App
