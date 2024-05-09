import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyectos = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();


  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setProyecto(proyecto[0]);

  }, [params.id])

  return (

      <div id="proyectos" className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white" >Proyecto {proyecto.nombre}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src={"/portafolio/images/" + proyecto.id + ".png"} alt="Proyecto 1" className="w-full mb-4 rounded-lg"></img>
            <h3 className="text-xl font-semibold mb-2">{proyecto.nombre}</h3>
            <p>Tecnologias utilizadas {proyecto.tecnologias}</p>
            <p className="text-gray-700 dark:text-gray-900" >{proyecto.descripcion}</p>
            <Link to={'https://' + proyecto.url} className="text-blue-500 hover:underline" target='_blank '>Ir al proyecto</Link>
          </div>
        </div>
        <br></br>

        <div className="container mx-auto text-center">
          <Link to="/portafolio" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Volver Atrás</Link>
        </div>
      </div>



  



  )
}
