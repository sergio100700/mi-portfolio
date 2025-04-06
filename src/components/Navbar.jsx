import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Mi Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Sobre mí</Link></li>
        <li><Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Proyectos</Link></li>
        <li><Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contacto</Link></li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </nav>
  );
}

export default Navbar;