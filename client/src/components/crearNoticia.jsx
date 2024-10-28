import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CrearNoticia = ({ show, handleClose, user, onNoticiaCreada }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/noticias', {
                titulo,
                descripcion,
                fecha,
                idUsuario: user.idUsuario 
            });

            if (response.status === 201) {
                // Aquí puedes manejar la respuesta, como cerrar el modal y reiniciar los campos
                onNoticiaCreada();
                handleClose();
            } else {
                alert('Error al crear la noticia');
            }
        }catch (error) {
            console.error('Error al crear la noticia:', error);
            alert('Error al crear la noticia');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Crear Noticia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitulo">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label className='mt-2'>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ingrese la descripción"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formFecha">
                        <Form.Label className='mt-2'>Fecha </Form.Label>
                        <Form.Control
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-4'>
                        Crear Noticia
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CrearNoticia;