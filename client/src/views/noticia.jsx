import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Noticia = () => {
    const { id } = useParams(); 
    const [noticia, setNoticia] = useState(null);
    const [otrasNoticias, setOtrasNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/noticias'); 
                const foundNoticia = response.data.find(n => n.idNoticia === parseInt(id));
                setNoticia(foundNoticia); 
            } catch (error) {
                console.error('Error al obtener las noticias:', error);
            } finally {
                setLoading(false); 
            }
        };

        const fetchOtrasNoticias = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/noticias'); 
                setOtrasNoticias(response.data.filter(n => n.id !== Number(id))); 
            } catch (error) {
                console.error('Error al obtener otras noticias:', error);
            }
        };

        fetchNoticias();
        fetchOtrasNoticias();
    }, [id]);

    const handleNoticiaClick = (idNoticia) => {
        navigate(`/noticia/${idNoticia}`); 
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

    if (loading) {
        return <p>Cargando noticia...</p>; 
    }

    if (!noticia) {
        return <p>No se encontró la noticia.</p>; 
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

            <Row className='my-4 mx-3'>
                <Col md={8}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{noticia.titulo}</h5>
                            <p className="card-text">{noticia.descripcion}</p>
                            <p className="card-text"><small className="text-muted">Fecha: {new Date(noticia.fecha).toLocaleDateString()}</small></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <h5>Otras Noticias</h5>
                    <div className="list-group">
                        {otrasNoticias.map((n) => (
                            <button key={n.idNoticia} className="list-group-item list-group-item-action" onClick={() => handleNoticiaClick(n.idNoticia)}>
                                {n.titulo}
                            </button>
                        ))}
                    </div>
                </Col>
            </Row>


        </>
    );
}

export default Noticia