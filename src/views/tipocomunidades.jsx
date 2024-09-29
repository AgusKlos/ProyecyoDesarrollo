import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import utniconwhite from '../images/utniconwhite.png';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TipoComunidades = () => {
    const communities = [
        { icon: <span className="bi bi-code-slash"></span>, title: 'Programación', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-basketball"></span>, title: 'Deportes', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-wrench"></span>, title: 'ING Mecánica', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-cup-hot"></span>, title: 'Intereses/afinidad', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-heart"></span>, title: 'Estilo de vida', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-chevron-double-right"></span>, title: 'Programación', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-compass"></span>, title: 'Ubicación', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-linkedin"></span>, title: 'Trabajo', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-chevron-double-right"></span>, title: 'Programación', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-currency-dollar"></span>, title: 'Inversiones', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-display"></span>, title: 'ING Sistemas', linkText: 'Ver todos los grupos' },
        { icon: <span className="bi bi-chevron-double-right"></span>, title: 'Programación', linkText: 'Ver todos los grupos' },
    ];

    const CommunityCard = ({ icon, title, linkText }) => (
        <Card className="text-center">
          <Card.Body>
            <div className="community-icon">{icon}</div>
            <Card.Title>{title}</Card.Title>
            <Button variant="link" href="#">{linkText}</Button>
          </Card.Body>
        </Card>
    );

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

            <Container>
                <h2>Todas las comunidades</h2>
                <Row>
                    {communities.map((community, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <CommunityCard {...community} />
                    </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default TipoComunidades