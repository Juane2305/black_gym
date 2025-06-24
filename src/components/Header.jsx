import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/LOGO-BLACK.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black w-full text-white py-4 px-6 md:px-10 flex justify-between items-center z-50 fixed">
      <a href="/">
        <img src={logo} alt="Logo" className=" w-auto size-20" />
      </a>
      <nav className="hidden md:flex space-x-8 font-semibold text-lg">
        <a href="/#ubicacion" className="hover:text-gray-300 transition-colors">
          Ubicación
        </a>
        <a href="/#ejercicios" className="hover:text-gray-300 transition-colors">
          Ejercicios
        </a>
        <a href="/#preguntas" className="hover:text-gray-300 transition-colors">
          Preguntas Frecuentes
        </a>
        <a href="/precios" className="hover:text-gray-300 transition-colors">
          Precios
        </a>
      </nav>

      {/* Botón hamburguesa para Mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none z-50"
        aria-label="Abrir menú"
      >
        <motion.svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          // Rotación del ícono al abrir/cerrar
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            /* Icono de "X" */
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M6 18L18 6"
            />
          ) : (
            /* Icono de hamburguesa */
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </motion.svg>
      </button>

      {/* Menú Mobile con animación de "side drawer" */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-2/3 max-w-sm bg-black shadow-md 
                       flex flex-col items-center justify-center z-40"
          >
            <nav className="flex flex-col space-y-6 text-lg font-semibold text-center">
              <a
                href="/#ubicacion"
                className="hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                Ubicación
              </a>
              <a
                href="/#ejercicios"
                className="hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                Ejercicios
              </a>
              <a
                href="/#preguntas"
                className="hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                Preguntas Frecuentes
              </a>
              <a
                href="/precios"
                className="hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                Precios
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

