import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import {Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Notificacion from '../components/notificacion'
import axios from 'axios';
import { useUser } from '../components/context';

const Comunidad = () => {
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

    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState('');

    const handleShowNotification = () => {
        setShowNotification(true);
        setMessage('Esta sería la notificación');
    };

    const handleHideNotification = () => {
        setShowNotification(false);
    };

    const { idComunidad } = useParams();
    const [comunidad, setComunidad] = useState(null);
    const [comunidades, setComunidades] = useState([]);
    useEffect(() => {
        const fetchComunidades = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/comunidades');
                setComunidades(response.data);
                // Filtrar la comunidad que corresponde al idComunidad
                const comunidadEncontrada = response.data.find(c => c.idComunidad === parseInt(idComunidad));
                setComunidad(comunidadEncontrada);
            } catch (error) {
                console.error('Error al obtener las comunidades:', error);
            }
        };

        fetchComunidades();
    }, [idComunidad]);

    if (!comunidad) {
        return <p>Cargando comunidad...</p>; // O un mensaje de error si no se encuentra
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
                <Col xs={7} md={2} className='mx-5'>
                    <Notificacion show={showNotification} message={message} />
                </Col>
                {user ? (
                            <span className="text-white me-3">{`Bienvenido, ${user.nombre}`}</span>
                        ) : (
                            <Button variant="outline-light me-3" onClick={handleLoginClick}>
                                Iniciar Sesión
                            </Button>
                    )}
            </Navbar>

            {/*<div>
                <header className="bg-primary text-white py-3">
                    <Container>
                    <Row className="align-items-center">
                        <Col xs={7} md={6}>
                            <h1>Nombre de la Comunidad</h1>
                        </Col>
                        <Col xs={7} md={2}>
                            <Button variant="light" onClick={handleShowNotification}>Mostrar notificación</Button>
                        </Col>
                        <Col xs={7} md={2}>
                            <Button variant="light" onClick={handleHideNotification}>Ocultar notificación</Button>
                        </Col>
                        <Col xs={7} md={2} className="text-md-end">
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

                
                <footer className="bg-light py-3 mt-5">
                    <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                        <p>&copy; {new Date().getFullYear()} Nombre de la Comunidad. Todos los derechos reservados.</p>
                        </Col>
                    </Row>
                    </Container>
                </footer>
            </div>*/}

            <div>
                <header className="bg-primary text-white py-3">
                    <Container>
                        <Row className="align-items-center text-center">
                            <Col xs={7} md={6}>
                                <h1>{comunidad.nombre}</h1>
                            </Col>
                        </Row>
                    </Container>
                </header>

                <Container className="mt-4">
                    <Row>
                        <Col md={8}> 
                            <Row>
                                <Col md={6} className="mb-4">
                                    <Card>
                                        <h2>Acerca de</h2>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                {comunidad.descripcion}
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
                                                {/*<Image src="avatar_moderador.jpg" roundedCircle fluid />*/}
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
                                <p>&copy; {new Date().getFullYear()} {comunidad.nombre}. Todos los derechos reservados.</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>

        </>
    );
}

export default Comunidad