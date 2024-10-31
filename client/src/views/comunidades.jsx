import React, { useState, useEffect } from 'react';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Navbar, Container, Nav, Image, Card, Button,Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../components/context';

const Comunidades = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [comunidades, setComunidades] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('Conferencias');
    const idUsuario = user ? user.id : null;

    const handleFilterChange = (eventKey) => {
        setSelectedFilter(eventKey);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const bajarComunidades = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/comunidades');
                setComunidades(response.data);
            } catch (error) {
                console.error('Error al obtener las comunidades:', error);
            }
        };
        bajarComunidades();
    }, []);

    const handleNavigationClick = (path) => {
        setActiveLink(path);
        navigate(`/${path}`);
    };

    const filteredComunidades = comunidades.filter(comunidad =>
        comunidad.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (idComunidad) => {
        navigate(`/comunidad/${idComunidad}`);
    };

    const handleUnirmeAComunidad = async (idComunidad,idUsuario) => {
        if (!idUsuario) {
            alert('Debes iniciar sesión para unirte a la comunidad.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/comunidadXusuario', {
                idComunidad,
                idUsuario:idUsuario
            });
            alert('Te has unido a la comunidad');
        } catch (error) {
            console.error('Error en la solicitud de unirse a la comunidad:', error);
        }
    };
    
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout(); 
        navigate('/');
    };

    return (
        <>
            <Navbar className="bg-dark text-white text-center py-2">
                <Container>
                    <Navbar.Brand 
                        className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center"
                        onClick={() => handleNavigationClick('')}
                    >
                        <Image src={utniconwhite} alt="Logo UTN" style={{ width: '18px', height: '18px'}}/>
                        UTN &middot; La Plata
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="cabecera me-auto">
                            <Nav.Link className={`text-white ${activeLink === 'noticias' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('noticias')}>Noticias</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'comunidades' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('comunidades')}>Comunidades</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'eventos' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('eventos')}>Eventos</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'beneficios' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('beneficios')}>Beneficios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {user ? (
                            <span className="text-white me-3"><Button variant="outline-light ms-5 me-2" onClick={handleLogoutClick}>
                            Cerrar Sesión
                            </Button></span>
                        ) : (
                            <Button variant="outline-light me-3" onClick={handleLoginClick}>
                                Iniciar Sesión
                            </Button>
                    )}
                </Container>
            </Navbar>

            <Container>
                <Row className="mb-4">
                    <h3 className='mt-4 mb-2'>Todas las comunidades</h3>
                    <Col className="d-flex mt-3">
                        <Form.Control
                            type="text"
                            placeholder="Buscar Comunidad"
                            value={searchTerm}
                            onChange={handleInputChange}
                            className='me-3 mb-1'
                        />
                        <Button className='bg-dark mb-1' onClick={() => setSearchTerm('')}>Limpiar Búsqueda</Button>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {filteredComunidades.length > 0 ? (
                        filteredComunidades.map((comunidad) => (
                            <Col key={comunidad.idComunidad}>
                                <Card className="text-center h-100">
                                    <Card.Body>
                                        <div dangerouslySetInnerHTML={{ __html: comunidad.icon }} />
                                        <Card.Title>{comunidad.nombre}</Card.Title>
                                        <Button variant="primary" onClick={() => handleCardClick(comunidad.idComunidad)}>Ver comunidad</Button>
                                        <Button variant="success" className="ms-2" onClick={() => handleUnirmeAComunidad(comunidad.idComunidad,idUsuario)}>Unirme</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p>No se encontraron comunidades</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Comunidades;
