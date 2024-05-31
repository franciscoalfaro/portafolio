import React from 'react'
import { Link } from 'react-router-dom'


export const Error = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-100'>
      <div className='text-center text-white'>
        <h1 className='text-5xl font-bold dark:text-black' >Error 404</h1>
        <p className='text-xl mt-4 dark:text-black'>Página Web No Encontrada</p>
        <div className='mt-8'>
          <Link to="/" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-6 py-3 transition duration-300 ease-in-out">
            Volver Atrás
          </Link>
        </div>
      </div>
    </div>

  )
}
