import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import eventBus from './utils/eventBus';
import './App.css'
import Navigation from './Navigation';
import Auth from './components/Auth';
import { useAuth } from './contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  const {handleAuthentication, isAuthModalOpen } = useAuth();
  React.useEffect(() => {
    handleAuthentication();
  }, [])
  React.useEffect(() => {
     eventBus.on("toast:success", (message: string) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
  })
      eventBus.on("toast:error", (message: string) => {
        toast.error(message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
      return () => {
        eventBus.removeAllListeners()

      }
    }, [])
  return (
      <>
        <Navigation />
        {
          isAuthModalOpen &&
          <Auth />
        }
        <ToastContainer />
      </>
  )
}

export default App
