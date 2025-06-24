// src/components/Entrenador.jsx

import { motion } from "framer-motion";

export const Entrenador = () => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Imagen del entrenador */}
        <motion.div
          className="w-full h-64 sm:h-auto overflow-hidden rounded-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dfschbyq2/image/upload/v1747778217/IMG_6603_ucsmef.jpg"
            alt="Entrenador Gimnasio"
            className="w-full h-full object-cover object-top sm:object-center"
          />
        </motion.div>

        {/* Texto de presentación */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conocé a Facundo</h2>
          <p className="text-gray-500 mb-4">
            Facundo es nuestro entrenador certificado. 
            Especialista en entrenamiento funcional y rutinas de hipertrofia, 
            siempre te va a dar la mejor información para que alcances tus objetivos.
          </p>
          <p className="text-gray-500 mb-4">
            Apasionado por el fitness y la vida sana, te guía paso a paso 
            cuidando la técnica y la motivación en cada sesión. 
          </p>
          <motion.button
            className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://wa.me/542613649591?text=%C2%A1Hola!%20Tengo%20una%20duda"
              target="_blank"
              rel="noopener noreferrer">
              Conectá con Facundo
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
