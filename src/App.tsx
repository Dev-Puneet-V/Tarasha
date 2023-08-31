import './App.css'
import Navigation from './Navigation';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <DataProvider>
      <Navigation />
    </DataProvider>
  )
}

export default App
