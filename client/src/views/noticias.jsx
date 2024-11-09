import React, {useEffect, useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image, Row, Col, Button, Dropdown } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { useNavigate } from 'react-router-dom';
import CrearNoticia from '../components/crearNoticia';
import { useUser } from '../components/context';
import axios from 'axios';

const Noticias = () => {
    const { user, logout } = useUser();
    const [selectedFilter, setSelectedFilter] = useState('Conferencias');
    const [showCrearNoticia, setShowCrearNoticia] = useState(false);
    const [noticias, setNoticias] = useState([]);
    const navigate = useNavigate();

    const handleShowCrearNoticia = () => setShowCrearNoticia(true);
    const handleCloseCrearNoticia = () => setShowCrearNoticia(false);

    const handleFilterChange = (eventKey) => {
      setSelectedFilter(eventKey);
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

    const handleNoticiaCreada = () => {
        fetchNoticias();
    };

    return (
        <>
            <Navbar className="bg-dark text-white text-center py-2">
                <Container>
                <Navbar.Brand className="text-start text-white mb-1 fs-3 d-flex justify-content-center align-items-center" onClick={handleInicioClick}>
                    <Image src={utniconwhite} className="img-fluid d-flex justify-content-center align-items-center mw-100 h-auto mx-2 my-0" alt="Logo UTN" style={{ width: '18px', height: '18px'}}/>
                    UTN &middot; La Plata
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="text-white" onClick={handleNoticiasClick}>Noticias</Nav.Link>
                                <Nav.Link className="text-white" onClick={handleComunidadesClick}>Comunidades</Nav.Link>
                                <Nav.Link className="text-white" onClick={handleEventosClick}>Eventos</Nav.Link>
                                <Nav.Link className="text-white" onClick={handleBeneficiosClick}>Beneficios</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        {user ? (
                            <Button variant="outline-light me-3" onClick={handleShowCrearNoticia}>
                                Crear Noticia
                            </Button>
                        ) : (
                            <span className="text-white d-none d-md-inline me-3">No puedes crear noticias sin estar autenticado</span>
                        )}
                </Container>
                {user ? (
                            <span className="text-white me-3"></span>
                        ) : (
                            <Button variant="outline-light me-3" onClick={handleLoginClick}>
                                Iniciar Sesión
                            </Button>
                    )}
            </Navbar>

            <Row className="mb-4 mx-2">
                    
                <h3 className='mt-3 mb-2'>NOTICIAS</h3> <br/>

                {/* <p className='my-2'>Buscar Noticias</p> */}
                {/* <Col className="d-flex">
                    <Dropdown className='me-5 mb-1' onSelect={handleFilterChange}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Sistemas de Información
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="Sistemas de Información">Sistemas de Información</Dropdown.Item>
                        <Dropdown.Item eventKey="Industrial">Industrial</Dropdown.Item>
                        <Dropdown.Item eventKey="Mecánica">Mecánica</Dropdown.Item>
                        <Dropdown.Item eventKey="Química">Química</Dropdown.Item>
                        <Dropdown.Item eventKey="Eléctrica">Eléctrica</Dropdown.Item>
                        <Dropdown.Item eventKey="Civil">Civil</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button className='ms-5 bg-dark mb-1'>Limpiar Filtros</Button>
                </Col> */}

            </Row>

            <Row>
                {/* <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="dark" size="sm">Este mes</Button>
                </Col>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Mes anterior</Button>
                </Col>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Este año</Button>
                </Col>
                <Col className='col-md-1'>
                    <Button className='p-1 py-0 px-2 mx-1' variant="light" size="sm" style={{ color: 'black' }}>Año anterior</Button>
                </Col> */}
            </Row>
            <Row className='my-4 mx-3'>
                <div className="col-md-9">
                    <div className="row">
                        {noticias.map((noticia) => (
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
            </Row>
       

            <CrearNoticia show={showCrearNoticia} handleClose={handleCloseCrearNoticia} user={user} onNoticiaCreada={handleNoticiaCreada}/>
        </>
    );
}

export default Noticias