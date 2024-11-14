import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const UserMenu = ({ user, onLogout }) => {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle 
        as={Button} 
        variant="outline-light" 
        id="dropdown-basic"
        className="p-0 rounded-circle align-items-center justify-content-center d-flex text-white"
        style={{
          width: '40px',    
          height: '40px',   
          borderColor: 'black', 
          backgroundColor: 'white', 
        }}>
        <FaUser className="ms-2 text-black" style={{ fontSize: '20px' }}  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <span className="m-3">{user.apellido} {user.nombre}</span>
        <Dropdown.Divider />
        <Dropdown.Item href="/perfilusuario">Mi Perfil</Dropdown.Item>
        <Dropdown.Item href="#/encuestas">Encuestas</Dropdown.Item>
        <Dropdown.Item href="#/notificaciones">Notificaciones</Dropdown.Item>
        <Dropdown.Item href="#/modo-oscuro">Modo oscuro</Dropdown.Item>
        <Dropdown.Item href="#/configuracion">Configuración</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={onLogout}>Salir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
