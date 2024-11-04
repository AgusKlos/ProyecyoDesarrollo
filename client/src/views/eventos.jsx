import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Card, Row, Col, Badge, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../components/context';

const Eventos = () => {
    const [eventos, setEventos]= useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Conferencias');
    const [attendanceFilter, setAttendanceFilter] = useState('Virtual');
    const { user, logout } = useUser();
    const [activeLink, setActiveLink] = useState('');
    const idUsuario = user ? user.id : null;
    const navigate = useNavigate();

    useEffect(() => {
        const bajarEventos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/eventos');
                setEventos(response.data);
            } catch (error) {
                console.error('Error al obtener las comunidades:', error);
            }
        };
        bajarEventos();
    }, []);

    const [filteredEventos, setFilteredEventos] = useState([]);
    const [fechaFilter, setFechaFilter] = useState('');

    useEffect(() => {
        // Filtrar eventos según el término de búsqueda y la fecha
        const eventosFiltrados = eventos.filter(evento => {
            const matchesName = searchTerm === '' || evento.nombre.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFecha = fechaFilter === '' || evento.fecha === fechaFilter;
            return matchesName && matchesFecha;
        });
        setFilteredEventos(eventosFiltrados); // Actualizar eventos filtrados
    }, [eventos, searchTerm, fechaFilter]); 

    const handleCardClick = (idEvento) => {
        navigate(`/evento/${idEvento}`);
    };

    const handleUnirmeAEvento = async (idEvento,idUsuario) => {
        if (!idUsuario) {
            alert('Debes iniciar sesión para unirte al evento');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/eventosXusuario', {
                idEvento,
                idUsuario:idUsuario
            });
            alert('Te has unido al evento');
        } catch (error) {
            console.error('Error en la solicitud de unirse al evento:', error);
        }
    };

    const handleFilterChange = (eventKey) => {
      setSelectedFilter(eventKey);
    };

    const handleAttendanceFilterChange = (eventKey) => {
      setAttendanceFilter(eventKey);
    };

    

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

    const handleNavigationClick = (path) => {
        setActiveLink(path);
        navigate(`/${path}`);
    };

    return (
        <>
            <Navbar className="bg-dark text-white text-center py-2">
                <Container>
                    <Navbar.Brand 
                        className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center"
                        onClick={() => navigate('/')}
                    >
                        <Image src={utniconwhite} alt="Logo UTN" style={{ width: '18px', height: '18px' }}/>
                        UTN &middot; La Plata
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" onClick={() => navigate('/noticias')}>Noticias</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/comunidades')}>Comunidades</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/eventos')}>Eventos</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/beneficios')}>Beneficios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {user ? (
                    <span className="text-white me-3">{`Bienvenido, ${user.nombre}`}</span>
                ) : (
                    <Button variant="outline-light me-3" onClick={() => navigate('/login')}>Iniciar Sesión</Button>
                )}
            </Navbar>

            <Row className="ms-2 mb-4">
                <h3 className='mt-3 mb-2'>Todos los eventos</h3>
                <Form className="d-flex">
                    <Form.Group className="me-3">
                        <Form.Label>Buscar por Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Buscar eventos" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="me-3">
                        <Form.Label>Filtrar por Fecha</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={fechaFilter} 
                            onChange={(e) => setFechaFilter(e.target.value)} 
                        />
                    </Form.Group>

                    <Button variant="secondary" className="align-self-end" onClick={() => {
                        setSearchTerm('');
                        setFechaFilter('');
                    }}>Limpiar Filtros</Button>
                </Form>
            </Row>

            <Row className="justify-content-center">
                {filteredEventos.length > 0 ? (
                    filteredEventos.map((evento, index) => (
                        <Col key={index} xs={6} md={4} lg={3} xl={2} className="mb-4 mx-2">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={evento.imagen} style={{ height: '10rem' }} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem' }}>{evento.nombre}</Card.Title>
                                    <Card.Text>
                                        <small className="text-muted">{evento.fecha}</small>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        {evento.categorias && evento.categorias.map((categoria, i) => (
                                            <Badge key={i} variant="secondary" className="mr-1" style={{ fontSize: '0.8rem' }}>
                                                {categoria}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button variant="primary" className="mt-2" onClick={() => handleCardClick(evento.id)}>Ver Detalles</Button>
                                    <Button variant="success" className="mt-2 ms-1" onClick={() => handleUnirmeAEvento(evento.idEvento,idUsuario)}>Unirme</Button>
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