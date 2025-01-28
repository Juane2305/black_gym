import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/LOGO-BLACK.svg"; // Ajusta la ruta a tu logo real

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo e info rápida */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo Gimnasio Black" className="size-26 w-auto mr-2" />
        </div>

        {/* Enlaces a secciones (puedes ajustarlos a tus rutas/scroll) */}
        <div className="flex flex-wrap gap-4 justify-center mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Inicio
          </Link>
          <Link to="/ejercicios/pectorales" className="hover:text-gray-300 transition-colors">
            Ejercicios
          </Link>
          <Link to="/#servicios" className="hover:text-gray-300 transition-colors">
            Servicios
          </Link>
          <Link to="/#testimonios" className="hover:text-gray-300 transition-colors">
            Testimonios
          </Link>
          <Link to="/#galeria" className="hover:text-gray-300 transition-colors">
            Galería
          </Link>
          <Link to="/#ubicacion-horarios" className="hover:text-gray-300 transition-colors">
            Ubicación & Horarios
          </Link>
          <Link to="/#entrenador" className="hover:text-gray-300 transition-colors">
            Entrenador
          </Link>
          <Link to="/#faq" className="hover:text-gray-300 transition-colors">
            FAQ
          </Link>
        </div>

        {/* Enlace a Instagram */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/blackgym_mdz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-red-500 transition-colors"
          >
            <FaInstagram className="text-2xl" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>

      {/* Separador y copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Elizca. Todos los derechos reservados.
      </div>
    </footer>
  );
};
