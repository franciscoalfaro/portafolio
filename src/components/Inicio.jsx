import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { SerializeForm } from '../helpers/SerializeForm'
import { Global } from '../helpers/Global'
import { trabajos } from '../data/trabajos'
import { servicios } from '../data/servicios'
import { Nav } from './Nav'
import { stack } from '../data/stack'
import { Contacto } from './Contacto'

export const Inicio = () => {

  const [nav, setNav] = useState(false)


  const handleBotonNav = () => {
    setNav(!nav)
  }


  return (


    <div className="min-h-screen bg-gray-100 dark:text-white dark:bg-gray-900">
      {/* Navbar */}


      {/* Hero */}
      <section id="inicio" className="py-20 dark:bg-gray-800 bg-gray-300">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">¡Bienvenido a mi Portafolio!</h1>
          <p className="text-lg dark:text-white">Aquí encontrarás información sobre mis proyectos y servicios.</p>
        </div>
      </section>
      <hr></hr>

      {/* Portafolio */}
      <section id="portafolio" className='py-20 dark:bg-gray-800 bg-gray-100'>
        <div id="portafolio" className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Portafolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trabajos.map(trabajo => {
              return (
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105" key={trabajo.id}>
                  <img src={`/images/${trabajo.id}.png`} alt={trabajo.nombre} className="w-full h-45 object-cover"></img>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{trabajo.nombre}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{trabajo.tecnologias}</p>
                    <Link to={"/proyectos/" + trabajo.id} className="text-blue-500 hover:underline ">Ver más</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Servicios */}
      <section id="servicios" className="py-20 dark:bg-gray-800 bg-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-black text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map(servicio => (
              <div key={servicio.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{servicio.nombre}</h3>
                <p className="text-gray-700 dark:text-gray-300">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr></hr>

      <hr></hr>

      {/* seccion stack */}
      <section id="stack" className="py-20 dark:bg-gray-800 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-black text-center">Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stack.map(item => (
              <div key={item.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105">
                <i className="text-5xl mb-4">
                  <img src={`/images/${item.icon}.png`} alt={item.nombre} className="w-18 h-16" />
                </i>
                <ul className="text-lg dark:text-white text-gray-700">
                  <li>{item.nombre}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>






      <hr></hr>

      {/* Contacto */}
      <section id="contacto" className="py-20 dark:bg-gray-900 bg-gray-300">
        <Contacto></Contacto>

      </section>
      <hr></hr>

      {/* Descarga de CV */}
      <section id="cv" className="py-20 dark:bg-gray-900 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">Descarga mi CV</h2>
          <a href="/francisco-alfaro.pdf" rel="noreferrer" target='_blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Descargar CV</a>
        </div>
      </section>
      <hr></hr>



    </div>
  );
}
