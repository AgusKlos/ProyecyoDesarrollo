import React, {useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image, Row, Col, Button, Dropdown } from 'react-bootstrap';
import utniconwhite from '../assets/images/utniconwhite.png';
import { useNavigate } from 'react-router-dom';

const Noticias = () => {

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

            <Row className="mb-4 mx-2">
                    
                <h3 className='mt-3 mb-2'>Todas los noticias</h3> <br/>

                <p className='my-2'>Buscar Noticias</p>
                <Col className="d-flex">
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
                </Col>

            </Row>

            <Row>
                <Col className='col-md-1'>
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
                </Col>
            </Row>

            <Row className='my-4 mx-3'>
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
            </Row>
        </>
    );
}

export default Noticias