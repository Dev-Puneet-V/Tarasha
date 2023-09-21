import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { BlogProvider } from './contexts/BlogContext';
import './index.css'
import { BookingProvider } from './contexts/Booking/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <DataProvider>
        <AuthProvider>
            <BookingProvider>
                <BlogProvider>
                    <App />
                </BlogProvider>
            </BookingProvider>
        </AuthProvider>
    </DataProvider>
    ,
)
