import React from 'react'

export const Footer = () => {
  return (

    <footer id="descarga-cv" className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <p className="text-center">&copy; 2024 - Todos los derechos reservados</p>
        <p className="text-center mt-2"><a href="/data/francisco-alfaro.pdf" rel="noreferrer">Descargar CV</a></p>

        <span className="text-muted text-sm">&copy; Francisco Alfaro - <a href="https://github.com/franciscoalfaro/" target='_blank'><span className="text-lg fab fa-github"></span></a></span>
        <span className="text-muted text-sm"><a href="https://www.linkedin.com/in/francisco-alfaro-ba8143183/" target='_blank'><span className="text-lg fab fa-linkedin"></span></a> </span>
      </div>
    </footer>
  )
}
