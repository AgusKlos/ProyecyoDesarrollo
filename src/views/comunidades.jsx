import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
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

            <Container>
                <Row className="mb-4">
                    
                    <h3 className='mt-3 mb-2'>Todas las comunidades</h3> <br/>

                    <p className='my-2'>Buscar Comunidad</p>
                    <Col className="d-flex">
                    <Dropdown className='me-5 mb-1' onSelect={handleFilterChange}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedFilter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="Conferencias">Conferencias</Dropdown.Item>
                        <Dropdown.Item eventKey="Honores">Honores</Dropdown.Item>
                        <Dropdown.Item eventKey="Talleres">Talleres</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button className='ms-5 bg-dark mb-1'>Limpiar Filtros</Button>
                    </Col>
    
                </Row>

                <Row className='my-2'>
                    <Col className='col-md-1'>
                        <Button className='p-1 py-0 px-2 mx-1' variant="dark" size="sm">Próximos</Button>
                    </Col>
                    <Col className='col-md-1'>
                        <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Esta semana </Button>
                    </Col>
                    <Col className='col-md-1'>
                        <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Este mes</Button>
                    </Col>
                </Row>

                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {communityData.map((community, index) => (
                    <Col key={index}>
                        <Card className="text-center h-100">
                        <Card.Body>
                            <div dangerouslySetInnerHTML={{ __html: community.icon }} />
                            <Card.Title>{community.title}</Card.Title>
                            <Card.Link href={community.link}>Ver todos los grupos</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Comunidades