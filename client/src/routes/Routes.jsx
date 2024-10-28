import React from "react";
import {Routes, Route} from 'react-router-dom';
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
import { UserProvider } from '../components/context.jsx';

const AppRoutes = () => {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/escritorio" element={<Escritorio/>}></Route>
                <Route path="/comunidad" element={<Comunidad/>}></Route>
                <Route path="/comunidades" element={<Comunidades/>}></Route>
                <Route path="/evento" element={<Evento/>}></Route>
                <Route path="/eventos" element={<Eventos/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/trabajo" element={<Trabajo/>}></Route>
                <Route path="/bolsatrabajo" element={<BolsaTrabajo/>}></Route>
                <Route path="/perfilusuario" element={<PerfilUsuario/>}></Route>
                <Route path="/tipocomunidades" element={<TipoComunidades/>}></Route>
                <Route path="/noticia" element={<Noticia/>}></Route>
                <Route path="/noticias" element={<Noticias/>}></Route>
                <Route path="/noticias" element={<Noticias/>}></Route>
                <Route path='/beneficios' element={<Beneficios/>}></Route>
                <Route path="/comunidad/:idComunidad" element={<Comunidad />} />
                <Route path="/noticia/:idNoticia" element={<Noticia />} />
            </Routes>
        </UserProvider>
    );
};

export default AppRoutes;