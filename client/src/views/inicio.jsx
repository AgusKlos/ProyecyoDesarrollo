import React, {useState} from 'react';
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


const Inicio = () => {
    const { user, logout } = useUser();  // Obtener el usuario del contexto
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => setShowMenu(true);
    const handleCloseMenu = () => setShowMenu(false);
    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('');

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
    ];

    

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
            {/* Barra de navegación principal */}
            <Navbar className="bg-dark text-white text-center py-2">
                <Container>
                    <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" onClick={() => navigate('/')}>
                        <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px' }} />
                        UTN &middot; La Plata
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="cabecera me-auto">
                            <Nav.Link className="text-white" onClick={() => navigate('/noticias')}>Noticias</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/comunidades')}>Comunidades</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/eventos')}>Eventos</Nav.Link>
                            <Nav.Link className="text-white" onClick={() => navigate('/beneficios')}>Beneficios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {user ? (
                        <span className="text-white me-3 d-flex align-items-center">
                            <Menu show={showMenu} handleClose={handleCloseMenu} />
                            <Button variant="outline-light ms-5 me-2">
                            <FaUser 
                                className="me-2" 
                                style={{ cursor: 'pointer' }} 
                                onClick={handleShowMenu} 
                            />
                            <span 
                                style={{ cursor: 'pointer' }}
                                onClick={handleShowMenu}
                            >
                                {`Bienvenido, ${user.nombre}`}
                                
                            </span>
                            </Button>
                        </span>
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
                        {/* Agregar más imágenes aquí si es necesario */}
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
                            {['NOTICIAS_1.jpg', 'NOTICIAS_2.jpg', 'NOTICIAS_3.jpg'].map((image, index) => (
                                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                    <div className="card">
                                        <img 
                                            src={require(`../assets/images/${image}`)} 
                                            className="card-img-top" 
                                            alt={`Card ${index + 1}`} 
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Título {index + 1}</h5>
                                            <p className="card-text">Texto de la tarjeta {index + 1}</p>
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
                    <Row className='mt-2'>
                        {eventos.map((evento, index) => (
                            <Col key={index} xs={6} md={4} lg={3} xl={2} className="mb-4 mx-5">
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
                        ))}
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


export default Inicio;