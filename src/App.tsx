import './App.css'
import Navigation from './Navigation';
import Modal from './components/Modal';
import SignUpForm from './components/SignUp';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <DataProvider>
      <Navigation />
      <Modal isOpen={true} onClose={() => {}}>
        <SignUpForm />
      </Modal>
    </DataProvider>
  )
}

export default App
