import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import AppRoutes from './routes/Routes';
//import { UserProvider } from './functions/services/context';
function App() {

  return (
    //<UserProvider>
    <div className="App">
      <AppRoutes/>
    </div>
    //</UserProvider>
  );
}

export default App;
