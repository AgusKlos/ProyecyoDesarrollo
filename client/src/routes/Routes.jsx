import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from '../views/inicio.jsx';
import Escritorio from '../views/escritorio.jsx';
import Comunidad from '../views/comunidad.jsx';
import Comunidades from '../views/comunidades.jsx';
import Evento from '../views/evento.jsx';
import Eventos from '../views/eventos.jsx';
import Login from '../views/login.jsx';
import Trabajo from '../views/trabajo.jsx';
import BolsaTrabajo from '../views/bolsatrabajo.jsx';
import PerfilUsuario from '../views/perfilusuario.jsx';
import TipoComunidades from '../views/tipocomunidades.jsx';
import Noticia from '../views/noticia.jsx';
import Noticias from '../views/noticias.jsx';
import Beneficios from '../views/beneficios.jsx';
import CrearNoticia from '../components/crearNoticia.jsx';
import { useUser } from '../components/context.jsx';

const AppRoutes = () => {
    const [showCrearNoticia, setShowCrearNoticia] = useState(false);
    const { user, setUser } = useUser() || {};

    const handleShowCrearNoticia = () => {
        if (user && user.id) { 
            setShowCrearNoticia(true);
        } else {
            alert("Error: El usuario no está disponible");
        }
    };
    const handleCloseCrearNoticia = () => setShowCrearNoticia(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/escritorio" element={<Escritorio />} />
                <Route path="/comunidad" element={<Comunidad />} />
                <Route path="/comunidades" element={<Comunidades />} />
                <Route path="/evento" element={<Evento />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/trabajo" element={<Trabajo />} />
                <Route path="/bolsatrabajo" element={<BolsaTrabajo />} />
                <Route path="/perfilusuario" element={<PerfilUsuario />} />
                <Route path="/tipocomunidades" element={<TipoComunidades />} />
                <Route path="/noticia" element={<Noticia />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route 
                    path="/crear-noticia" 
                    element={<button onClick={handleShowCrearNoticia}>Crear Noticia</button>} 
                />
            </Routes>

            {user && (
                <CrearNoticia 
                    show={showCrearNoticia} 
                    handleClose={handleCloseCrearNoticia} 
                    user={user} 
                />
            )}
        </>
    );
};

export default AppRoutes;
