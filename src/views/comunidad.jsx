import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import {Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Comunidad = () => {

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
            <Navbar className="bg-dark text-white text-center py-2">
                <Container>
                <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" href="#home" onClick={handleInicioClick}>
                    <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px'}}/>
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
                        </Navbar.Collapse>
                </Container>
                <Button variant="outline-light me-3" onClick={handleLoginClick}>
                    Iniciar Sesión
                </Button>
            </Navbar>

            <div>
                <header className="bg-primary text-white py-3">
                    <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                        <h1>Nombre de la Comunidad</h1>
                        </Col>
                        <Col xs={12} md={6} className="text-md-end">
                        <Button variant="light">Unirse</Button>
                        </Col>
                    </Row>
                    </Container>
                </header>

                <Container className="mt-4">
                    <Row>
                    <Col md={8}>
                        <h2>Acerca de</h2>
                        <p>
                            Aquí va una descripción de la comunidad. Describe su propósito,
                            qué ofrece a sus miembros, etc. 
                        </p>

                        <h2>Eventos</h2>
                        <Row>
                        <Col md={6} className="mb-4">
                            <Card>
                            <Card.Img variant="top" src="imagen_evento.jpg" />
                            <Card.Body>
                                <Card.Title>Título del evento</Card.Title>
                                <Card.Text>
                                Breve descripción del evento.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Fecha y hora del evento</small>
                            </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Card>
                        <Card.Header>Moderadores</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col xs={4}>
                                <Image src="avatar_moderador.jpg" roundedCircle fluid />
                                </Col>
                                <Col xs={8}>
                                Nombre Apellido
                                </Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                    </Row>
                </Container>

                {/* Footer */}
                <footer className="bg-light py-3 mt-5">
                    <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                        <p>&copy; {new Date().getFullYear()} Nombre de la Comunidad. Todos los derechos reservados.</p>
                        </Col>
                    </Row>
                    </Container>
                </footer>
            </div>

        </>
    );
}

export default Comunidad