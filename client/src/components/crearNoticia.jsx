import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CrearNoticia = ({ show, handleClose, user }) => {
    console.log("Usuario recibido en CrearNoticia:", user);

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [idUsuario, setIdUsuario] = useState('')

    useEffect(() => {
        if (user && user.id) {
            setIdUsuario(user.id);
        }
    }, [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!user?.id) {
            alert("Usuario no definido correctamente.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/api/noticias', {
                titulo,
                descripcion,
                fecha,
                idUsuario, 
            });
    
            if (response.status === 201) {
                handleClose();
                setTitulo('');
                setDescripcion('');
                setFecha('');
            } else {
                alert('Error al crear la noticia');
            }
        } catch (error) {
            alert('Error al crear la noticia');
            console.error(error);
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
                        <Form.Label>Descripción</Form.Label>
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
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Crear Noticia
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CrearNoticia;
