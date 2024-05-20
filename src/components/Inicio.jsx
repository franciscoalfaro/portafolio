import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { SerializeForm } from '../helpers/SerializeForm'
import { Global } from '../helpers/Global'
import { trabajos } from '../data/trabajos'
import { servicios } from '../data/servicios'
import { Nav } from './Nav'
import { stack } from '../data/stack'

export const Inicio = () => {

  const [nav, setNav] = useState(false)


  const handleBotonNav = () => {
    setNav(!nav)
  }


  const { form, changed } = useForm()
  const [loading, setLoading] = useState(false)

  const contactoForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let contacto = SerializeForm(e.target)
      console.log(contacto)

      const request = await fetch(Global.url + "user/contacto", {
        method: "POST",
        body: JSON.stringify(contacto),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await request.json()
      console.log(data)

      if (data.status === "success") {
        console.log("correo de contacto enviado")

      } else {
        console.log(data.message)
      }

    } catch (error) {
      console.error("Error:", error);
    }
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

      {/* stack */}
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
        <div className="container mx-auto">
          <p className="text-lg dark:text-white text-gray-700">Puedes contactarme en franciscoalfar@gmail.com</p>
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">Contacto</h2>

          <form onSubmit={contactoForm}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellido" required />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+569-12345678" pattern="\+56\s9\-\d{8}" inputMode="tel" required />
                <p className="text-gray-600 text-xs italic mt-1">Formato: +569-12345678</p>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ejemplo@correo.com" required />
              </div>
            </div>
            <div className="grid gap-6 mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu mensaje</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje aqui..."></textarea>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
          </form>
        </div>
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
