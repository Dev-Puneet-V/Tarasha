import './App.css'
import Navigation from './Navigation';
import Auth from './components/Auth';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <DataProvider>
      <Navigation />
      <Auth />
    </DataProvider>
  )
}

export default App
