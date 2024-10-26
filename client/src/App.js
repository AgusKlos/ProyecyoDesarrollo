import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mail, setMail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud POST para el login
      const response = await axios.post('http://localhost:8080/api/login', {
        mail,
        contrasenia
      });
      // Manejar la respuesta del servidor
      setMensaje(`Bienvenido, ${response.data.usuario.nombre}`);
    } catch (error) {
      // Manejar errores (e.g., usuario no encontrado o contraseña incorrecta)
      if (error.response && error.response.data) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje('Error en el login');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login de Usuario</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        {mensaje && <p>{mensaje}</p>}
      </header>
    </div>
  );
}

export default App;
