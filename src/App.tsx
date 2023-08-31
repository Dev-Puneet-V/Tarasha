import './App.css'
import Header from './components/Header'
import { DataProvider } from './contexts/DataContext'
import Home from './pages/Home'

function App() {

  return (
    <DataProvider>
      <Header />
      <Home />
    </DataProvider>
  )
}

export default App
