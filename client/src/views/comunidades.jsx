import React, { useState, useEffect } from 'react';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Navbar, Container, Nav, Image, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../components/context';
import { IoCodeSlash, IoBarChart, IoBuild, IoBusiness, IoCalculator, IoWifi, IoDesktop, IoLaptop, IoMagnet, IoPhonePortrait, IoTrophy, IoLogoAndroid, IoBulb, IoFlask, IoLogoAngular, IoLogoDocker, IoLogoJavascript, IoLogoHtml5, IoLogoNodejs, IoLogoPython, IoLogoReact, IoLogoTux, IoSchool } from 'react-icons/io5'; // Importación de los iconos de react-icons
import UserMenu from '../components/userMenu.jsx';
import CrearComunidad from '../components/crearComunidad';

const Comunidades = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [comunidades, setComunidades] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Conferencias');
    const [showCrearComunidad, setShowCrearComunidad] = useState(false);
    const idUsuario = user ? user.id : null;

    const handleFilterChange = (eventKey) => {
        setSelectedFilter(eventKey);
    };

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleLogout = () => {
        logout();  
        localStorage.removeItem('user'); 
        navigate('/'); 
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const bajarComunidades = async () => {
            try {
                const response = await axios.get('http://localhost:8080/comunidades');
                if (Array.isArray(response.data)) {
                    const comunidadesLimpias = response.data.filter(comunidad => comunidad?.nombre);
                    setComunidades(comunidadesLimpias);
                } else {
                    console.error("La respuesta no es un array válido:", response.data);
                    setComunidades([]);  
                }
            } catch (error) {
                console.error('Error al obtener las comunidades:', error);
                setComunidades([]); 
            }
        };
        bajarComunidades();
    }, []);

    const handleNavigationClick = (path) => {
        setActiveLink(path);
        navigate(`/${path}`);
    };

    const fetchComunidades = async () => {
        try {
            const response = await axios.get('http://localhost:8080/comunidades');
            setComunidades(response.data);
        } catch (error) {
            console.error('Error al obtener las comunidades:', error);
        }
    };

    const handleCardClick = (idComunidad) => {
        navigate(`/comunidad/${idComunidad}`);
    };

    const handleUnirmeAComunidad = async (idComunidad, idUsuario) => {
        if (!idUsuario) {
            alert('Debes iniciar sesión para unirte a la comunidad.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/comunidadXusuario', {
                idComunidad,
                idUsuario: idUsuario
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

    const handleCommunityCreated = (newComunidad) => {
        setComunidades((prevComunidades) => [...prevComunidades, newComunidad]);
        setShowCrearComunidad(false); // Cierra el formulario modal
    };
    
    const handleClose = () => {
        setShowCrearComunidad(false);  // Cierra el modal
    };

    const iconMapping = [
        { keywords: ['ingenieros', 'ingeniería', 'ingeniero'], icon: IoBuild },
        { keywords: ['programación', 'programador', 'programadores', 'programar'], icon: IoCodeSlash },
        { keywords: ['economía', 'economías', 'industrial', 'industriales', 'finanzas', 'finanza', 'estadística', 'estadísticas'], icon: IoBarChart },
        { keywords: ['mecánica', 'mecánicas'], icon: IoBuild },
        { keywords: ['civil', 'construcción'], icon: IoBusiness },
        { keywords: ['cálculo', 'metamática', 'exactas', 'exacta'], icon: IoCalculator },
        { keywords: ['wifi', 'wi-fi', 'internet'], icon: IoWifi },
        { keywords: ['sistemas'], icon: Math.random() > 0.5 ? IoDesktop : IoLaptop },
        { keywords: ['física', 'físicas'], icon: IoMagnet },
        { keywords: ['celular', 'iphone'], icon: IoPhonePortrait },
        { keywords: ['deporte', 'deportes', 'fútbol', 'vóleibol', 'hockey', 'basquet', 'basquetbol', 'handball'], icon: IoTrophy },
        { keywords: ['android'], icon: IoLogoAndroid },
        { keywords: ['eléctrica', 'energía', 'electricidad', 'eléctricas'], icon: IoBulb },
        { keywords: ['química', 'laboratorio', 'laboratorios', 'químicas'], icon: IoFlask },
        { keywords: ['angular'], icon: IoLogoAngular },
        { keywords: ['docker'], icon: IoLogoDocker },
        { keywords: ['javascript'], icon: IoLogoJavascript },
        { keywords: ['html', 'html5'], icon: IoLogoHtml5 },
        { keywords: ['node', 'nodejs', 'node.js'], icon: IoLogoNodejs },
        { keywords: ['python'], icon: IoLogoPython },
        { keywords: ['react'], icon: IoLogoReact },
        { keywords: ['linux', 'bash', 'debian'], icon: IoLogoTux },
        { keywords: [], icon: IoSchool } // Default icon
    ];

    const getIconForComunidad = (nombre) => {
        if (!nombre) {
            return IoSchool;
        }

        const lowerCaseName = nombre.toLowerCase();
        for (const { keywords, icon } of iconMapping) {
            if (keywords.some(keyword => lowerCaseName.includes(keyword))) {
                return icon;
            }
        }
        return IoSchool; // Default icon
    };

    const filteredComunidades = comunidades.filter(comunidad =>
        comunidad.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar className="bg-dark text-white text-center py-2">
                <Container className="ms-1 me-1">
                    <Navbar.Brand
                        className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center"
                        onClick={() => handleNavigationClick('')}
                    >
                        <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px' }} />
                        UTN &middot; La Plata
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="me-4">
                        <Nav className="cabecera me-auto">
                            <Nav.Link className={`text-white ${activeLink === 'noticias' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('noticias')}>Noticias</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'comunidades' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('comunidades')}>Comunidades</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'eventos' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('eventos')}>Eventos</Nav.Link>
                            <Nav.Link className={`text-white ${activeLink === 'beneficios' ? 'active-link' : ''}`} onClick={() => handleNavigationClick('beneficios')}>Beneficios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {user ? (
                        <Button className="me-2" variant="outline-light" onClick={() => setShowCrearComunidad(true)}>
                            Crear Comunidad
                        </Button>
                    ) : (
                        <span className="text-white d-none d-md-inline me-3">No puedes crear comunidades sin estar autenticado</span>
                    )}
                    {user ? (           
                        <UserMenu className="me-1 pe-1" user={user} onLogout={handleLogout} onDarkModeToggle={handleDarkModeToggle} darkMode={darkMode}/>
                    ) : (
                        <Button variant="outline-light ms-2 me-1" onClick={() => navigate('/login')}>
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
                                        {React.createElement(getIconForComunidad(comunidad.nombre), { style: { fontSize: '2rem' } })}
                                        <Card.Title>{comunidad.nombre}</Card.Title>
                                        <Button variant="primary" className="mt-1" onClick={() => handleCardClick(comunidad.idComunidad)}>Ver comunidad</Button>
                                        <Button variant="success" className="ms-2 mt-1" onClick={() => handleUnirmeAComunidad(comunidad.idComunidad, idUsuario)}>Unirme</Button>
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

            <CrearComunidad 
                show={showCrearComunidad} 
                onHide={() => setShowCrearComunidad(false)} 
                handleClose = {handleClose}
                user={user}
                onCommunityCreated={handleCommunityCreated} 
                
            />

        </>
    );
}

export default Comunidades;
