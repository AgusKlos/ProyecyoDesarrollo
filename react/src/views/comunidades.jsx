import React, { useState } from 'react';
import utniconwhite from '../images/utniconwhite.png';
import { Navbar, Container, Nav, Image, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IonIcon } from 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

const Comunidades = () => {
    
    const communityData = [
        { icon: '<svg>...</svg>', title: 'Programación', link: '/programacion' },
        { icon: '<svg>...</svg>', title: 'Deportes', link: '/deportes' },
        { icon: '<svg>...</svg>', title: 'ING Mecánica', link: '/mecanica' },
        { icon: '<svg>...</svg>', title: 'Intereses/afinidad', link: '/intereses' },
        { icon: '<svg>...</svg>', title: 'Estilo de vida', link: '/estilo-vida' },
        { icon: '<svg>...</svg>', title: 'Programación', link: '/programacion' },
        { icon: '<svg>...</svg>', title: 'Ubicación', link: '/ubicacion' },
        { icon: '<svg>...</svg>', title: 'Trabajo', link: '/trabajo' },
        { icon: '<svg>...</svg>', title: 'Programación', link: '/programacion' },
        { icon: '<svg>...</svg>', title: 'Inversiones', link: '/inversiones' },
        { icon: '<svg>...</svg>', title: 'ING Sistemas', link: '/sistemas' },
        { icon: '<svg>...</svg>', title: 'Programación', link: '/programacion' },
    ];

    const [selectedFilter, setSelectedFilter] = useState('Conferencias');

    const handleFilterChange = (eventKey) => {
      setSelectedFilter(eventKey);
    };

    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };


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

    const filteredCommunities = communityData.filter(community =>
        community.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
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

            <Container>
                <Row className="mb-4">
                    <h3 className='mt-4 mb-2'>Todas las comunidades</h3> <br />
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
                    {filteredCommunities.length > 0 ? (
                        filteredCommunities.map((community, index) => (
                            <Col key={index}>
                                <Card className="text-center h-100">
                                    <Card.Body>
                                        <div dangerouslySetInnerHTML={{ __html: community.icon }} />
                                        <Card.Title>{community.title}</Card.Title>
                                        <Card.Link href={community.link}>Ver todos los grupos</Card.Link>
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

export default Comunidades