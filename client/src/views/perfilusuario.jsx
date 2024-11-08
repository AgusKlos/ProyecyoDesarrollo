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
    const [searchTerm, setSearchTerm] = useState('');


    const modificarPerfil=async()=>{
        console.log(user);
        try {
            const response= await axios.post('http://localhost:8080/updateperfil',{
            idUsuario: user.id
        })
        //alert('Has actualizado tu perfil correctamente');
        }catch (error){
            console.error('Error en la solicitud de actualizar tu perfil', error);
        }   
    }

    useEffect(()=>{
        const getComunidadesUsuario = async ()=>{
            try{
                const response =  await axios.get('http://localhost:8080/getcomunidadesUsuario',{
                    idUsuario: idUsuario
                });
            }catch(error){
                console.error('Error al traer las comunidades del usuario');
            }   
        }
        getComunidadesUsuario(); 
    }, []);
    

    const filteredComunidades = comunidades.filter(comunidad =>
        comunidad.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (idComunidad) => {
        navigate(`/comunidad/${idComunidad}`);
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
            <input onChange={modificarPerfil}></input>
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
            </div>
        

        </>
    );
}

export default PerfilUsuario