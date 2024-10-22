import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/inicio.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './rutas/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
