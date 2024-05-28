import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyectos = () => {
  const [proyecto, setProyecto] = useState({});
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.find(trabajo => trabajo.id === params.id);
    setProyecto(proyecto);
  }, [params.id]);

  const openImageModal = (image) => {
    setModalImage(image);
    setShowImageModal(true);
  };

  return (
    <div id="proyectos" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-black text-center">Proyecto: {proyecto.nombre}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={`/images/${proyecto.id}.png`}
            alt={proyecto.nombre}
            className="w-full h-auto rounded-lg object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => openImageModal(`/images/${proyecto.id}.png`)}
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">{proyecto.nombre}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Tecnologías utilizadas: {proyecto.tecnologias}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{proyecto.descripcion}</p>
          <a
            href={`https://${proyecto.url}`}
            className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al proyecto
          </a>
        </div>
      </div>

      {/* Mostrar otras imágenes si existen */}
      {proyecto.imagen && proyecto.imagen.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white text-center">Otras Imágenes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proyecto.imagen.map(img => (
              <img key={img.id} src={`/images/${img.name}.png`} alt={`${proyecto.nombre} - ${img.name}`} className="w-full h-auto rounded-lg object-cover cursor-pointer" onClick={() => openImageModal(`/images/${img.name}.png`)} />
            ))}
          </div>
        </div>
      )}

      {/* Modal de imagen */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-75" onClick={() => setShowImageModal(false)}>
          <img src={modalImage} alt="Ampliada" className="max-h-full max-w-full" />
        </div>
      )}

      <div className="container mx-auto text-center mt-8">
        <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Volver Atrás
        </Link>
      </div>
    </div>
  );
};
