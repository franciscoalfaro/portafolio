import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { SerializeForm } from '../helpers/SerializeForm'
import { Global } from '../helpers/Global'
import { trabajos } from '../data/trabajos'

export const Inicio = () => {

  const [theme, setTheme] = useState('ligth')
  const [modoOsc, setModoOsc] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
      setModoOsc(true)

    } else {
      document.querySelector('html').classList.remove('dark')
      setModoOsc(false)


    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth')
  }

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


    <div className={`min-h-screen ${modoOsc ? 'dark:bg-gray-900 dark:text-white' : 'bg-gray-100'}`}>
      {/* Navbar */}

      <nav className="bg-gray-800 dark:bg-slate-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/" className="text-white font-semibold text-lg">Francisco Alfaro</a>
          </div>
          <div className="lg:hidden">
            <button id="menu-toggle" className="text-white focus:outline-none" onClick={handleBotonNav}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex lg:items-center lg:w-auto ${nav ? '' : 'hidden'}`} id="menu">
            <ul className="flex space-x-4 text-white">
              <li><a href="#inicio"  >Inicio</a></li>
              <li><a href="#portafolio"  >Portafolio</a></li>
              <li><NavLink to="/portafolio/public/francisco-alfaro.pdf" rel="noreferrer" target='_blank '>CV</NavLink></li>
              <li><a href="#contacto"  >Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>




      {/* Hero */}
      <section id="inicio" className={`py-20 text-center ${modoOsc ? 'dark:text-white' : 'text-black'}`}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi Portafolio!</h1>
          <p className="text-lg">Aquí encontrarás información sobre mis proyectos y servicios.</p>
        </div>
      </section>
      <hr></hr>
      {/* Portafolio */}
      <section id="portafolio" className='py-20 dark:bg-gray-800 bg-gray-100'>
        <div id="portafolio" className="container mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Portafolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trabajos.map(trabajo => {
              return (
                <div className="bg-gray-50 rounded-lg p-8 shadow-md p-6 dark:bg-gray-700" key={trabajo.id}>
                  <img src={"/portafolio/images/" + trabajo.id + ".png"} alt="Proyecto 1" className="w-full mb-4 rounded-lg"></img>
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">{trabajo.nombre}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{trabajo.tecnologias}</p>
                  <Link to={"/portafolio/proyectos/" + trabajo.id} className="text-blue-500 hover:underline ">Ver más</Link>
                </div>
              )
            })}

          </div>
        </div>
      </section>
      <hr></hr>

      {/* Servicios */}
      <section id="servicios" className="py-20 dark:bg-gray-800 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">Servicios</h2>
          {/* Aquí puedes listar tus servicios */}
          <ul className="text-lg dark:text-white text-gray-700">
            <li>Diseño y Desarrollo Web</li>
            <li>Desarrollo de Aplicaciones Móviles</li>
            <li>Consultoría en Tecnologías de la Información</li>
          </ul>
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
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+56 9 - 99999999" pattern="\+56\s9\s-\s\d{8}" inputMode="tel" required />
                <p className="text-gray-600 text-xs italic mt-1">Formato: +56 9 - 99999999</p>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>
            </div>
            <div className="grid gap-6 mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
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
          <a href="/portafolio/public/francisco-alfaro.pdf" rel="noreferrer" target='_blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Descargar CV</a>
        </div>
      </section>
      <hr></hr>



    </div>
  );
}
