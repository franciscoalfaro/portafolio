import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyectos = () => {
  const [proyecto, setProyecto] = useState({});
  const [showImageModal, setShowImageModal] = useState(false); // Estado para controlar el modal de imagen ampliada
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.find(trabajo => trabajo.id === params.id); // Cambiado de filter a find para obtener un solo objeto
    setProyecto(proyecto);
  }, [params.id]);

  return (
    <div id="proyectos" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-black text-center">Proyecto: {proyecto.nombre}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img src={`/images/${proyecto.id}.png`} alt={proyecto.nombre} className="w-full h-auto rounded-lg object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105" onClick={() => setShowImageModal(true)}></img>
          {showImageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-75"  onClick={() => setShowImageModal(false)}>
              <img src={`/images/${proyecto.id}.png`} alt={proyecto.nombre} className="max-h-full max-w-full"></img>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">{proyecto.nombre}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Tecnologías utilizadas: {proyecto.tecnologias}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{proyecto.descripcion}</p>
          <a href={`https://${proyecto.url}`} className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600" target="_blank" rel="noopener noreferrer">Ir al proyecto</a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Volver Atrás</Link>
      </div>
    </div>
  );
};
