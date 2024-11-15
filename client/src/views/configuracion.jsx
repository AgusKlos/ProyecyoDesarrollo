import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useUser } from '../components/context.jsx'; 
import axios from 'axios';

const Configuracion = () => {
  const { user, setUser } = useUser(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mail: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre || '',
        apellido: user.apellido || '',
        mail: user.mail || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!user) {
        alert('No hay datos de usuario para actualizar');
        return;
    }

    try {
        
        const response = await axios.put(`http://localhost:3000/api/usuario/${user.id}`, formData);
  
        if (response.status === 200) {
          const updatedUser = { ...user, ...formData };
          setUser(updatedUser); 
          localStorage.setItem('user', JSON.stringify(updatedUser)); 
          
        }
      } catch (error) {
        console.error('Error al actualizar los datos:', error);
        alert('Hubo un error al actualizar los datos.');
      }
  };

    const handleInicioClick = () => {
        navigate('/');
    };



  const handleCancel = () => {
    setFormData({
      nombre: user.nombre || '',
      apellido: user.apellido || '',
      mail: user.mail || '',
    });
  };

  if (!user) {
    return <div>No estás logueado. Por favor, inicia sesión.</div>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h4 className="mb-4">Configuración de Usuario</h4>
              <Form onSubmit={handleSave}>
                <Form.Group controlId="formNombre" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formApellido" className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCorreo" className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    name="correo"
                    value={formData.mail}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formcontraseña" className="mb-3">
                  <Form.Label>Contraseña </Form.Label>
                  <Form.Control
                    type="contrasenia"
                    placeholder="Ingresa tu contraseña"
                    name="contraseña"
                    value={formData.contrasenia}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleInicioClick}>
                  Guardar cambios
                </Button>
                <Button
                  variant="secondary"
                  className="ms-3"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Configuracion;


