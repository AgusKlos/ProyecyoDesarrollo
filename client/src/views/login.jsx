import {React, useState} from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BtnAcceder from '../components/buttons/BtnAcceder';
import IptPassword from "../components/inputs/IptPassword";
import IptUsername from "../components/inputs/IptUsername";
import { useUser } from '../components/context';

const Login = () => {
    const [mail, setMail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleUsernameChange = (event) => {
        setMail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setContrasenia(event.target.value);
    };

    const handleAccederClick = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:8080/api/login', {
            mail,
            contrasenia   
        });

        if (response) {
            setUser(response.data.usuario);
            navigate('/');
        } else {
            console.log(response.token);
            alert('Usuario y/o contraseña invalidos');
            //navigate('/');
        }
    };

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
                        <IptUsername controlId="formBasicUsername" placeholder="Usuario" value={mail} onChange={handleUsernameChange} className="my-2"> </IptUsername>
                        <IptPassword controlId="formBasicPassword" placeholder="Contraseña" value={contrasenia} onChange={handlePasswordChange} className="my-2"> </IptPassword>
                        <BtnAcceder variant="primary" type="submit" className="float-end" onClick={handleAccederClick}>
                            Acceder
                        </BtnAcceder>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
}

export default Login