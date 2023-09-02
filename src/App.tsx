import './App.css'
import Navigation from './Navigation';
import Auth from './components/Auth';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthModalOpen } = useAuth();
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
