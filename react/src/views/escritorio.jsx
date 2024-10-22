import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faUsers, faEnvelope, faBell, faMoon, faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { useNavigate } from 'react-router-dom';

const Escritorio = () => {
    const navigate = useNavigate();

    const handleNoticiasClick = () => {
        navigate('/noticias');
    };

    const handleComunidadesClick = () => {
        navigate('/comunidades');
    };

    const handleEventosClick = () => {
        navigate('/eventos');
    };

    const handleInicioClick = () => {
        navigate('/');
    };

    const handleBeneficiosClick = () => {
        navigate('/beneficios');
    }

    return (
        <Navbar className="bg-dark text-white text-center py-2">
            <Container>
            <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" href="#home" onClick={handleInicioClick}>
                    <Image
                        src={utniconwhite}
                        className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0"
                        alt="Logo UTN"
                        style={{ width: '18px', height: '18px' }}
                    />
                    UTN &middot; La Plata
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="#home" onClick={handleNoticiasClick}>Noticias</Nav.Link>
                        <Nav.Link className="text-white" href="#link" onClick={handleComunidadesClick}>Comunidades</Nav.Link>
                        <Nav.Link className="text-white" href="#link" onClick={handleEventosClick}>Eventos</Nav.Link>
                        <Nav.Link className="text-white" href="#link" onClick={handleBeneficiosClick}>Beneficios</Nav.Link>
                    </Nav>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic-button">
                                <FontAwesomeIcon icon={faUser} /> Apellido Nombre
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/profile">
                                    <FontAwesomeIcon icon={faUser} /> Mi Perfil
                                </Dropdown.Item>
                                <Dropdown.Item href="#/events">
                                    <FontAwesomeIcon icon={faCalendar} /> Mis Eventos
                                </Dropdown.Item>
                                <Dropdown.Item href="#/communities">
                                    <FontAwesomeIcon icon={faUsers} /> Mis Comunidades
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/surveys">
                                    <FontAwesomeIcon icon={faEnvelope} /> Encuestas
                                </Dropdown.Item>
                                <Dropdown.Item href="#/notifications">
                                    <FontAwesomeIcon icon={faBell} /> Notificaciones
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/dark-mode">
                                    <FontAwesomeIcon icon={faMoon} /> Modo oscuro
                                </Dropdown.Item>
                                <Dropdown.Item href="#/settings">
                                    <FontAwesomeIcon icon={faCog} /> Configuración
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/logout">
                                    <FontAwesomeIcon icon={faArrowLeft} /> Salir
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Escritorio;