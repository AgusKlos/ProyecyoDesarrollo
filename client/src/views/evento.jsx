import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/context';

const Evento = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate()

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
            

            <Row>
                <Container className='me-0 pe-0 ms-4 ps-4'>
                    <Row>
                        <Col className='mt-4 ms-0 ps-0 me-3'>
                            <Row>
                                <Col>
                                <Image src="https://i.imgur.com/k64z6uH.png" fluid />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>Nuevos lenguajes y sus usos practicos</h2>
                                <p>
                                    ...
                                </p>
                                <p>
                                    ...
                                </p>
                                <p>
                                    ...
                                </p>
                                <p>
                                    ...
                                </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='me-0 pe-0'>
                            <Container className='me-0 pe-0'>
                                <Row className="mb-3">
                                    <Col xs={2}>
                                    <div className="text-center">
                                        <span className="display-6">10</span>
                                    </div>
                                    </Col>
                                    <Col>
                                    <p>10 de Agosto - 20:00 hs</p>
                                    <p>Ubicación: Virtual</p>
                                    <Button variant="primary">Inscribirse</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <p>Conferencias</p>
                                    <p>Virtual</p>
                                    <p>Español</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <h5>Organiza</h5>
                                    <Row>
                                        <Col xs={6}>
                                        <Image src="imagen1.jpg" roundedCircle />
                                        <p>Nombre Apellido</p>
                                        </Col>
                                        <Col xs={6}>
                                        <Image src="imagen2.jpg" roundedCircle />
                                        <p>Nombre Apellido</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <h5>Contacto</h5>
                                    <p><a href="mailto:contacto123contacto123@gmail.com">contacto123contacto123@gmail.com</a></p>
                                    <p><a href="mailto:contacto123contacto123@gmail.com">contacto123contacto123@gmail.com</a></p>
                                    <p>
                                        <a href="#">
                                        <i className="bi bi-share-fill"></i> Compartir
                                        </a>
                                    </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    
                
                </Container>
            </Row>

        </>
    );
}

export default Evento