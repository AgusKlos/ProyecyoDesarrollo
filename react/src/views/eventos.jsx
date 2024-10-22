import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { Card, Row, Col, Badge, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import evento1 from '../images/EVENTO_1.jpg';
import evento2 from '../images/EVENTO_2.jpg';
import evento3 from '../images/EVENTO_3.jpg';
import evento4 from '../images/EVENTO_4.jpg';

const Eventos = () => {

    const eventos = [
        {
            fecha: '10 de agosto - 20:00 hs',
            titulo: 'Nuevos lenguajes y sus usos practicos',
            imagen: evento1,
            categorias: ['Conferencias', 'Virtual', 'Español'],
        },
        {
            fecha: '12 de agosto - 21:00 hs',
            titulo: 'Entrega de diplomas ING INDUSTRIAL',
            imagen: evento2,
            categorias: ['Honores', 'Presencial', 'Español'],
        },
        {
            fecha: '1 de septiembre - 18:00 hs',
            titulo: 'Taller de RCP',
            imagen: evento3,
            categorias: ['Taller', 'Presencial', 'Español'],
        },
        {
          fecha: '22 de septiembre - 20:30 hs',
          titulo: 'Criptomonedas y bla bla bla',
          imagen: evento4,
          categorias: ['Conferencias', 'Virtual', 'Inglés'],
        },
        // ... más eventos
    ];

    const [selectedFilter, setSelectedFilter] = useState('Conferencias');
    const [attendanceFilter, setAttendanceFilter] = useState('Virtual');

    const handleFilterChange = (eventKey) => {
      setSelectedFilter(eventKey);
    };

    const handleAttendanceFilterChange = (eventKey) => {
      setAttendanceFilter(eventKey);
    };

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

    const filteredEventos = eventos.filter(evento => {
        const matchesCategory = selectedFilter === '' || evento.categorias.includes(selectedFilter);
        const matchesAttendance = attendanceFilter === '' || evento.categorias.includes(attendanceFilter);
        return matchesCategory && matchesAttendance;
    });

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

            <Row className="ms-2 mb-4">
                <h3 className='mt-3 mb-2'>Todos los eventos</h3> <br/>
                <p className='my-2'>Buscar Eventos</p>
                <Col className="d-flex">
                    <Dropdown className='me-5 mb-1' onSelect={handleFilterChange}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {selectedFilter === '' ? 'Todos' : selectedFilter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="">Todos</Dropdown.Item>
                            <Dropdown.Item eventKey="Conferencias">Conferencias</Dropdown.Item>
                            <Dropdown.Item eventKey="Honores">Honores</Dropdown.Item>
                            <Dropdown.Item eventKey="Talleres">Talleres</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='me-5 mb-1' onSelect={handleAttendanceFilterChange}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-attendance">
                            {attendanceFilter === '' ? 'Presencial o Virtual' : attendanceFilter}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="">Todos</Dropdown.Item>
                            <Dropdown.Item eventKey="Presencial">Presencial</Dropdown.Item>
                            <Dropdown.Item eventKey="Virtual">Virtual</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button className='ms-5 bg-dark mb-1' onClick={() => setAttendanceFilter('')}>Limpiar Filtros</Button>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="dark" size="sm">Próximos</Button>
                </Col>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Esta semana</Button>
                </Col>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Este mes</Button>
                </Col>
            </Row>

            <Row className="justify-content-center">
                {filteredEventos.length > 0 ? (
                    filteredEventos.map((evento, index) => (
                        <Col key={index} xs={6} md={4} lg={3} xl={2} className="mb-4 mx-2">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={evento.imagen} style={{ height: '10rem' }} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem' }}>{evento.titulo}</Card.Title>
                                    <Card.Text>
                                        <small className="text-muted">{evento.fecha}</small>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        {evento.categorias.map((categoria, i) => (
                                            <Badge key={i} variant="secondary" className="mr-1" style={{ fontSize: '0.8rem' }}>
                                                {categoria}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No se encontraron eventos.</p>
                )}
            </Row>
        </>
    );
};
export default Eventos;