import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    

    const [nav, setNav] = useState(false)


    const handleBotonNav = () => {
      setNav(!nav)
    }
    return (
        <nav className="bg-gray-800 dark:bg-slate-800 p-4 border-black dark:border-white">
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
                <div className={`lg:flex lg:items-center lg:w-auto ${nav ? 'block' : 'hidden'} lg:flex-col lg:items-start`} id="menu">
                    <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 text-white lg:items-start">
                        <li><a href="#inicio" className="block lg:inline">Inicio</a></li>
                        <li><a href="#portafolio" className="block lg:inline">Portafolio</a></li>
                        <li><a href="#servicios" className="block lg:inline">Servicios</a></li>
                        <li><NavLink to="/francisco-alfaro.pdf" rel="noreferrer" target='_blank ' className="block lg:inline">CV</NavLink></li>
                        <li><a href="#contacto" className="block lg:inline">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
