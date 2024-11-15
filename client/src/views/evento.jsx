import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate , useParams} from 'react-router-dom';
import { useUser } from '../components/context';

const Evento = () => {
    const { user, logout } = useUser();
    const [evento, setEvento]= useState([]);
    const navigate = useNavigate();
    const { idEvento } = useParams();

    useEffect(() => {
        const eventosGuardados = localStorage.getItem('eventos');
        if (eventosGuardados) {
            const eventos = JSON.parse(eventosGuardados);
            const eventoEncontrado = eventos.find(ev => ev.idEvento === parseInt(idEvento));
            console.log(eventoEncontrado);
            setEvento(eventoEncontrado);
        }
    }, [idEvento]);
    if (!evento) {
        return <div>Cargando...</div>;
    }

    const handleNoticiasClick = () => {
        navigate('/noticias')
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

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleBeneficiosClick = () => {
        navigate('/beneficios');
    }
    
    return (
        <>
            <Row>
                <Navbar className="bg-dark text-white text-center py-2">
                    <Container>
                    <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" href="#home" onClick={handleInicioClick}>
                        <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px'}}/>
                        UTN &middot; La Plata
                        </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className="text-white" onClick={handleNoticiasClick}>Noticias</Nav.Link>
                                    <Nav.Link className="text-white" onClick={handleComunidadesClick}>Comunidades</Nav.Link>
                                    <Nav.Link className="text-white" onClick={handleEventosClick}>Eventos</Nav.Link>
                                    <Nav.Link className="text-white" onClick={handleBeneficiosClick}>Beneficios</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                    {user ? (
                            <span className="text-white me-3">{`Bienvenido, ${user.nombre}`}</span>
                        ) : (
                            <Button variant="outline-light me-3" onClick={handleLoginClick}>
                                Iniciar Sesión
                            </Button>
                    )}
                </Navbar>
            </Row>


            <Button className='m-2 bg-dark' variant="secondary" onClick={() => window.history.back()}>
                &#8592; Volver
            </Button>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image src={utniconwhite} width="30" height="30" className="d-inline-block align-top" alt="UTN icon" />
                            {' UTN Eventos'}
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleNoticiasClick}>Noticias</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <h1>{evento.nombre}</h1>
                            <p>{evento.descripcion}</p>
                            {/* Renderiza más detalles del evento aquí */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Evento