import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CrearComunidad = ({ show, onHide, handleClose, user, onCommunityCreated  }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/comunidades', {
                nombre,
                descripcion,
                idUsuario: user.id, // Suponemos que el usuario está autenticado
            });

            if (response.status === 201 || response.status === 200) {
                // Notificar que la comunidad fue creada y cerrar el modal
                onCommunityCreated (response.data.comunidad);
                handleClose();
            } else {
                alert('Error al crear la comunidad');
            }
        } catch (error) {
            console.error('Error al crear la comunidad:', error);
            alert('Error al crear la comunidad');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header className="bg-dark text-white" closeButton>
                <Modal.Title>Crear Comunidad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de la comunidad"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescripcion">
                        <Form.Label className='mt-2'>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ingrese la descripción de la comunidad"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mt-4'>
                        Crear Comunidad
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CrearComunidad;
