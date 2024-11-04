import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useUser } from './context';

const Menu = ({ show, handleClose }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useUser();

    const handleLogout = () => {
        localStorage.removeItem(user);
        logout();
        navigate('/');
    };

    return (
        <Navbar>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} className="li-menu" to="/perfilusuario" onClick={handleClose}>Mi Perfil</Nav.Link>
                        <Nav.Link className="li-menu" onClick={handleLogout}>Cerrar Sesión</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
};

export default Menu;