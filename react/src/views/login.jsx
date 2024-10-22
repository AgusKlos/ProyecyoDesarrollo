import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const handleInicioClick = () => {
        navigate('/');
    };
    
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
                                <div className="col-md-5"></div>
                                <Nav.Link className="text-white me-3 col-md-5 offset-md-2">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card className="text-center bg-secondary" style={{ borderRadius: '15px', width: '300px' }}>
                    <Card.Body>
                    <Card.Title className="mb-4">Iniciar Sesión</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Usuario" className="my-2"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" className="my-2"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="float-end">
                            Acceder
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
}

export default Login