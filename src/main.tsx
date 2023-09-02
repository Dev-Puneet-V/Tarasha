import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <DataProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </DataProvider>
    ,
)
