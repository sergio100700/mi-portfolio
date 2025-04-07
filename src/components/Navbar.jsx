import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-2 p-2 text-gray-800 dark:text-gray-200 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Mi Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Sobre mí</Link></li>
          <li><Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Proyectos</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contacto</Link></li>
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>

        </div>
      </nav>

      {/* Sidebar Menu - Only visible when open */}
      <div
        className={`fixed top-1 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 p-4 pt-5 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col space-y-4 mt-8">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;