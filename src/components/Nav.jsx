import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Nav = () => {


    const [nav, setNav] = useState(false)
    const [showInicio, setShowInicio] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        setShowInicio(!pathname.startsWith("/proyectos"));
    }, [location]);


    const handleBotonNav = () => {
        setNav(!nav)
    }
    return (

        <div className="bg-gray-800 dark:bg-slate-800 p-4 border-black dark:border-white">
            <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a id='logo' href="/" className="font-semibold text-lg">FA</a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={handleBotonNav} className="flex items-center text-white px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${nav ? 'block' : 'hidden'}`} id="menu">
                    <div className="text-sm lg:flex-grow lg:ml-auto">
                        <ul className="flex flex-col lg:flex-row lg:justify-end lg:space-x-4 lg:space-y-0 text-white">
                            {showInicio ? <li><a href='#inicio' className="block lg:inline">Inicio</a></li> : <li><a href="/inicio" className="block lg:inline">Inicio</a></li>}
                            {showInicio ? <li><a href='#portafolio' className="block lg:inline">Portafolio</a></li> : <li><a href="/inicio/#portafolio" className="block lg:inline">Portafolio</a></li>}
                            {showInicio ? <li><a href='#servicios' className="block lg:inline">Servicios</a></li> : <li><a href="/inicio/#servicios" className="block lg:inline">Servicios</a></li>}
                            {showInicio ? <li><a href='#stack' className="block lg:inline">Stack</a></li> : <li><a href="/inicio/#stack" className="block lg:inline">Stack</a></li>}
                            <li><NavLink to="/francisco-alfaro.pdf" rel="noreferrer" target='_blank' className="block lg:inline">CV</NavLink></li>
                            {showInicio ? <li><a href='#contacto' className="block lg:inline">Contacto</a></li> : <li><a href="/inicio/#contacto" className="block lg:inline">Contacto</a></li>}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>


    )
}