import React from 'react';
import { Alert } from 'react-bootstrap';

const Notificacion = ({ show, message }) => {
  if (!show) {
    return null;
  }

  return (
    <Alert variant="info">
      {message}
    </Alert>
  );
};

export default Notificacion;