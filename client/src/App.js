import React from 'react';
import AppRoutes from './routes/Routes';
import { UserProvider } from './components/context';

function App() {
    return (
        <UserProvider>
            <AppRoutes />
        </UserProvider>
    );
}

export default App;
