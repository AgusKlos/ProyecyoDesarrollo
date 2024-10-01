import React, {useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TipoComunidades = () => {
    
    const CommunityCard = ({ icon, title, linkText }) => (
        <Card className="text-center">
          <Card.Body>
            <div className="community-icon">{icon}</div>
            <Card.Title>{title}</Card.Title>
            <Button variant="link" href="#">{linkText}</Button>
          </Card.Body>
        </Card>
    );

    const [selectedFilter, setSelectedFilter] = useState('Conferencias');

    const handleFilterChange = (eventKey) => {
      setSelectedFilter(eventKey);
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

    const techGroups = [
        {
          title: 'HTML y bla bla bla',
          members: '10000 miembros - mundial',
          image: 'ruta/a/imagen/html.png', // Reemplaza con la ruta correcta
          private: true,
        },
        // Agrega más grupos aquí...
      ];
    
      const mobileGroups = [
        {
          title: 'Android y bla bla bla',
          members: '777 miembros - mundial',
          image: 'ruta/a/imagen/android.jpg', // Reemplaza con la ruta correcta
        },
        {
          title: 'iOS y bla bla bla',
          members: '0 miembros - mundial',
          image: 'ruta/a/imagen/ios.png', // Reemplaza con la ruta correcta
        },
        // Agrega más grupos aquí...
      ];
    
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

            <Row className="mb-4 ms-2">
                    
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

            <Button className='m-2 bg-dark' variant="secondary" onClick={() => window.history.back()}>
                &#8592; Volver
            </Button>

            <Container>
                <Row className="mb-4">
                    <Col>
                    <h2>Tecnologias web - Ver todo</h2>
                    </Col>
                </Row>
                <Row>
                    {techGroups.map((group) => (
                    <Col key={group.title} md={4} className="mb-4">
                        <Card>
                        <Card.Img variant="top" src={group.image} />
                        {group.private && (
                            <Card.ImgOverlay className="text-white bg-danger">
                            <Card.Title>Privado</Card.Title>
                            </Card.ImgOverlay>
                        )}
                        <Card.Body>
                            <Card.Title>{group.title}</Card.Title>
                            <Card.Text>{group.members}</Card.Text>
                            <Button variant="dark">Entrar</Button>
                            <Button variant="light">Ver grupo</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>

                {/* Repetir estructura para Aplicaciones moviles */}
                <Row className="mb-4">
                    <Col>
                    <h2>Aplicaciones moviles - Ver todo</h2>
                    </Col>
                </Row>
                <Row>
                    {mobileGroups.map((group) => (
                    <Col key={group.title} md={4} className="mb-4">
                        <Card>
                        <Card.Img variant="top" src={group.image} />
                        <Card.Body>
                            <Card.Title>{group.title}</Card.Title>
                            <Card.Text>{group.members}</Card.Text>
                            <Button variant="dark">Entrar</Button>
                            <Button variant="light">Ver grupo</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default TipoComunidades