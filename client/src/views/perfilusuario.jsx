import React, {useEffect, useState} from 'react';
import utniconwhite from '../assets/images/utniconwhite.png';
import { Navbar, Container, Nav, Image, Card, Button,Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/context';
import axios from 'axios';

const PerfilUsuario = () => {
    const navigate = useNavigate()
    const {user, logout}= useUser();
    const idUsuario = user ? user.id : null;
    const [comunidades, setComunidades] = useState([]);
    const [eventos, setEventos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const modificarPerfil=async()=>{
        console.log(user);
        try {
            const response= await axios.post('http://localhost:8080/updateperfil',{
            idUsuario: idUsuario
        })
        //alert('Has actualizado tu perfil correctamente');
        }catch (error){
            console.error('Error en la solicitud de actualizar tu perfil', error);
        }   
    }

    useEffect(() => {
        if (!idUsuario) {
            return; // Si idUsuario es null o undefined, no hacer nada
        }
        console.log(idUsuario);
        const getComunidadesUsuario = async () => {
            try {
                console.log(idUsuario);
                const response = await axios.get(`http://localhost:8080/getComunidadesUsuario`, {
                    params: {
                        id_Usuario: idUsuario 
                    },
                });
                setComunidades(response.data);
                console.log('Comunidades del usuario:', response.data);
            } catch (error) {
                console.error('Error al traer las comunidades del usuario:', error);
            }
        };
        const getEventosUsuario= async () => {
            try{
                console.log(idUsuario)
                const response= await axios.get(`http://localhost:8080/getEventosUsuario`,{
                    params:{
                        id_Usuario: idUsuario
                    },
                });
                setEventos(response.data);
                console.log('Eventos del usuario:', response.data);
            }catch(error){
                console.error('Error al traer los eventos del usuario:', error);
            }
        };
        getEventosUsuario();
        getComunidadesUsuario();
    }, [idUsuario]);

    
    
    const filteredEventos = eventos.filter(evento =>
        evento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredComunidades = comunidades.filter(comunidad =>
        comunidad.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (idComunidad) => {
        navigate(`/comunidad/${idComunidad}`);
    };

    const handleCardClick2 = (idEvento) => {
        navigate(`/eventos/${idEvento}`);
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

    const handleLogoutClick = () => {
        logout(); 
        navigate('/');
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
                </Container>
                {user ? (
                    <span className="text-white me-3"><Button variant="outline-light ms-5 me-2" onClick={handleLogoutClick}>
                    Cerrar Sesión
                    </Button></span>
                ) : (
                    <Button variant="outline-light me-3" onClick={handleLoginClick}>
                        Iniciar Sesión
                    </Button>
                )}
            </Navbar>

            <Button className='m-2 bg-dark' variant="secondary" onClick={() => window.history.back()}>
                &#8592; Volver
            </Button>
            <div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {filteredComunidades.length > 0 ? (
                        filteredComunidades.map((comunidad) => (
                            <Col key={comunidad.idComunidad}>
                                <Card className="text-center h-100">
                                    <Card.Body>
                                        <div dangerouslySetInnerHTML={{ __html: comunidad.icon }} />
                                        <Card.Title>{comunidad.nombre}</Card.Title>
                                        <Button variant="primary" onClick={() => handleCardClick(comunidad.idComunidad)}>Ver comunidad</Button>
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
                {/*<button onClick={getEventosUsuario}>Obtener eventos usuario</button>*/}
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {filteredEventos.length > 0 ? (
                        filteredEventos.map((evento) => (
                            <Col key={evento.idEvento}>
                                <Card className="text-center h-100">
                                    <Card.Body>
                                        <div dangerouslySetInnerHTML={{ __html: evento.icon }} />
                                        <Card.Title>{evento.nombre}</Card.Title>
                                        <Button variant="primary" onClick={() => handleCardClick2(evento.idEvento)}>Ver Evento</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p>No se encontraron eventos</p>
                        </Col>
                    )}
                </Row>
            </div>
        

        </>
    );
};

export default PerfilUsuario;