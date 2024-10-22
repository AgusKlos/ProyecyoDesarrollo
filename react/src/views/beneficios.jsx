import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/inicio.scss';
import { Container, Card, Row, Col, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { useNavigate } from 'react-router-dom';

const Beneficios = () => {


    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('');

    const handleNoticiasClick = () => {
        setActiveLink('noticias');
        navigate('/noticias');
    }; 

    const handleComunidadesClick = () => {
        setActiveLink('comunidades');
        navigate('/comunidades');
    };

    const handleEventosClick = () => {
        setActiveLink('eventos');
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
                            <Nav className="cabecera me-auto">
                                <Nav.Link className={`text-white ${activeLink === 'noticias' ? 'active-link' : ''}`} href="#home" onClick={handleNoticiasClick}>Noticias</Nav.Link>
                                <Nav.Link className={`text-white ${activeLink === 'comunidades' ? 'active-link' : ''}`} href="#link" onClick={handleComunidadesClick}>Comunidades</Nav.Link>
                                <Nav.Link className={`text-white ${activeLink === 'eventos' ? 'active-link' : ''}`} href="#link" onClick={handleEventosClick}>Eventos</Nav.Link>
                                <Nav.Link className={`text-white ${activeLink === 'beneficios' ? 'active-link' : ''}`} href="#link" onClick={handleBeneficiosClick}>Beneficios</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
                <Button variant="outline-light me-3" onClick={handleLoginClick}>
                    Iniciar Sesión
                </Button>
            </Navbar>

            <section className="my-5">
                <div>

                    <Row className="mx-5">
                        <h5>Becas parciales del  50%</h5>
                        <ul>
                            <li>Profesionales graduados en la UTN - Facultad Regional La Plata </li>
                            <li>Profesionales graduados en otras Universidades que cumplan los requisitos de admisión y acrediten ingresos insuficientes para abonar los aranceles</li>
                        </ul>
                    </Row>
                    <Row className="mx-5">
                        <h5>Becas totales del 100%</h5>
                        <ul>
                            <li>Auxiliares docentes de la UTN - Facultad Regional La Plata con dedicación simple o semi dedicación</li>
                        </ul>
                    </Row>
                    <Row className="mx-5">
                        <h5>Becas extraordinarias del 100%</h5>
                        <ul>
                            <li>Profesionales de reciente graduación que acrediten ingresos insuficientes para abonar los aranceles establecidos, y que posean además un promedio igual o superior a 7 (siete) puntos en la carrera de grado.</li>
                        </ul>
                    </Row>

                    <Row className="mx-5">
                        <p>
                            Los objetivos son facilitar a los interesados que cumplan en cada caso con los requisitos de admisión, el acceso a la oferta académica de posgrado. 
                            <br></br> A tal efecto, se ha previsto el otorgamiento de becas parciales y totales, que les permitan afrontar los gastos de matrícula  y aranceles de las distintas carreras.
                            <br></br>Los que deseen postularse deberán llenar el formulario de solicitud, que se encuentra disponible en la Dirección de Posgrado de la Facultad Regional La Plata, ubicada en la planta baja del edificio de Ingeniería en Sistemas de Información.
                        </p>
                    </Row>

                </div>
            </section>

            <footer className="bg-dark text-light">
                <Container className='pt-3'>
                    <Row>
                    <Col>
                        <h5>Contacto</h5>
                        <p>Universidad Tecnológica Nacional - Facultad Regional La Plata</p>
                        <p>Av. 60 esq. 124 s/n, Berisso, Buenos Aires, Argentina | Tel: (0221) 412-4300</p>
                        <p>webmaster@frip.utn.edu.ar | <a href="#">Formulario de Contacto</a></p>
                    </Col>
                    <Col className="text-end">
                        <h5>Seguinos en</h5>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
                        <p className="text-muted mt-3">Desarrollado en 2024 ©</p>
                    </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}


export default Beneficios;