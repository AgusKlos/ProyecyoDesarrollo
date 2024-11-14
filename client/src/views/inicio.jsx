import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/inicio.scss';
import { Container, Card, Row, Col, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import foto_utn_1 from '../assets/images/foto_utn_1.jpg';
import foto_utn_2 from '../assets/images/foto_utn_2.jpg';
import evento1 from '../assets/images/EVENTO_1.jpg';
import evento2 from '../assets/images/EVENTO_2.jpg';
import evento3 from '../assets/images/EVENTO_3.jpg';
import { useUser } from '../components/context';
import Menu from '../components/menu';
import axios from 'axios';
import UserMenu from '../components/userMenu.jsx';

const Inicio = () => {
    const { user, logout } = useUser();  // Obtener el usuario del contexto
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => setShowMenu(true);
    const handleCloseMenu = () => setShowMenu(false);
    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('');
    const [noticias, setNoticias] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const idUsuario = user ? user.id : null;
    const [fechaFilter, setFechaFilter] = useState('');
    const [eventos, setEventos]= useState([]);

    const [filteredEventos, setFilteredEventos] = useState([]);

    const handleCardClick = (idEvento) => {
        navigate(`/evento/${idEvento}`);
    };

    const handleLogout = () => {
        logout();  
        localStorage.removeItem('user'); 
        navigate('/'); 
    };

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

    useEffect(() => {
        // Filtrar eventos según el término de búsqueda y la fecha
        const eventosFiltrados = eventos.filter(evento => {
            const matchesName = searchTerm === '' || evento.nombre.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFecha = fechaFilter === '' || evento.fecha === fechaFilter;
            return matchesName && matchesFecha;
        });
        setFilteredEventos(eventosFiltrados); // Actualizar eventos filtrados
    }, [eventos, searchTerm, fechaFilter]); 

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


    const fetchNoticias = async () => {
        try {
            const response = await axios.get('http://localhost:8080/noticias'); // Cambia la URL según tu configuración
            setNoticias(response.data);
        } catch (error) {
            console.error('Error al obtener las noticias:', error);
        }
    };

    useEffect(() => {
        fetchNoticias();
    }, []);

    const handleNoticiaClick = (idNoticia) => {
        navigate(`/noticia/${idNoticia}`); // Navegar a la noticia específica
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

    const handleLogoutClick = () => {
        logout(); // Cambia el contexto a no logueado
        localStorage.removeItem(user);
        navigate('/');
    };

    return (
        <> 
            <Navbar className="bg-dark text-white text-center py-2">
                <Container className="ms-3">
                    <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" onClick={() => navigate('/')}>
                        <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px' }} />
                        UTN &middot; La Plata
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="me-5" id="basic-navbar-nav">
                        <Nav className="cabecera me-auto">
                            <Nav.Link className="text-white" onClick={() => navigate('/noticias')}>Noticias</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/comunidades')}>Comunidades</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/eventos')}>Eventos</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/beneficios')}>Beneficios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {user ? (           
                        <UserMenu user={user} onLogout={handleLogout} />
                    ) : (
                        <Button variant="outline-light ms-2 me-3" onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </Button>
                    )}
                </Container>
            </Navbar>

            <section className="bg-dark">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={foto_utn_1} className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Título de la Slide 1</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={foto_utn_2} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Título de la Slide 2</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </section>



            <section className="container my-5">
                <h2 className="mb-4">Noticias</h2>
                <div className="row">
                    <div className={`col-md-3 mb-4 pd-4 ${activeLink === 'noticias' ? 'active-link' : ''}`} onClick={handleNoticiasClick}>
                        <button className="btn btn-primary" type="button">
                            Ver Todas
                        </button>
                    </div>

                <div className="col-md-9">
                    <div className="row">
                        {noticias.slice(0, 3).map((noticia) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={noticia.idNoticia}>
                                <div className="card" onClick={() => handleNoticiaClick(noticia.idNoticia)}>
                                    <div className="card-body">
                                        <h5 className="card-title">{noticia.titulo}</h5>
                                        <p className="card-text">{noticia.descripcion}</p>
                                        <p className="card-text"><small className="text-muted">Fecha: {new Date(noticia.fecha).toLocaleDateString()}</small></p>
                                        {noticia.imagen && (
                                            <img src={`http://localhost:8080${noticia.imagen}`} alt="Imagen de la noticia" style={{ width: '100%', marginTop: '10px' }} />
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                </div>
            </section>


            <section className="position-relative d-flex align-items-center justify-content-between" style={{ backgroundImage: `url(${foto_utn_1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', color: 'white' }}>
                <div className="position-absolute w-100 h-100 bg-dark" style={{ opacity: 0.3, zIndex: 1 }}></div>
                <div className="d-flex align-items-center w-100 h-100 px-4 position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-3 fw-bold mb-0 me-0 pe-0">Las mejores cosas se viven en comunidad</h1>
                    <div className="d-flex ml-auto me-0">
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 1</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 2</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 3</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 4</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 5</button>
                    </div>
                </div>
            </section>

            <section className="container my-5">
                <h2 className="mb-4">Eventos</h2>
                <div className="row">
                <div className={`col-md-3 mb-4 pd-4 ${activeLink === 'eventos' ? 'active-link' : ''}`} onClick={handleEventosClick}>
                        <button className="btn btn-primary" type="button">
                            Ver Todos
                        </button>
                    </div>
                    <Row className="justify-content-center">
                        {filteredEventos.length > 0 ? (
                            filteredEventos.slice(0,4).map((evento, index) => (
                                <Col key={index} xs={6} md={4} lg={3} xl={2} className="mb-4 mx-5">
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
                </div>
            </section>

            <section className="position-relative d-flex align-items-center justify-content-between" style={{ backgroundImage: `url(${foto_utn_2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', color: 'white' }}>
                <div className="position-absolute w-100 h-100 bg-dark" style={{ opacity: 0.3, zIndex: 1 }}></div>
                <div className="d-flex align-items-center w-100 h-100 px-4 position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-3 fw-bold mb-0">Links de Interés</h1>
                    <div className="d-flex ml-auto">
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 1</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 2</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 3</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 4</button>
                        <button className="btn btn-light ms-2" style={{ opacity: 0.37 }}>Botón 5</button>
                    </div>
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
                        <a href="https://www.facebook.com/utnfrlaplata/" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://x.com/utnfrlaplata" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com/utnfrlp/" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.youtube.com/channel/UCOMYT48wFK3YGLIb2-KxJWQ" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
                        <p className="text-muted mt-3">Desarrollado en 2024 ©</p>
                    </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}


export default Inicio;