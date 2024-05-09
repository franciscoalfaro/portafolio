import React from 'react';
import{Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import { Inicio } from '../components/Inicio';
import { Footer } from '../components/Footer';
import { Error } from '../components/Error';
import { Proyectos } from '../components/Proyectos';

export const MisRutas = () => {
  return (
    <BrowserRouter>

        {/* contenido central */}

   
          <Routes>
              <Route path="/portafolio" element={<Inicio></Inicio>}></Route>
              <Route path="/portafolio/inicio" element={<Inicio></Inicio>}></Route>
              <Route path="/portafolio/proyectos/:id" element={<Proyectos></Proyectos>}></Route>
              <Route path='*' element={<Error></Error>}></Route>
          </Routes>

       
          <hr></hr>


        {/* footer */}
        <Footer></Footer>

    </BrowserRouter>
  )
}