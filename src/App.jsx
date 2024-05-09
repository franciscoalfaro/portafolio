import { useEffect, useState } from 'react'
import { MisRutas } from './router/MisRutas'

function App() {

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


  return (
    <div className="bg-gray-300 dark:bg-gray-800">
      <MisRutas></MisRutas>

      <button onClick={handleChangeTheme} className="fixed bottom-0 right-0 m-8 dark:bg-gray-800 dark:text-white rounded-full py-2 px-4 bg-gray-200 text-gray-800 rounded-full shadow-md z-50 dark:border-white border-transparent border">
        {modoOsc ? 'Modo Claro' : 'Modo Oscuro'}
      </button>


    </div>
  )
}

export default App
