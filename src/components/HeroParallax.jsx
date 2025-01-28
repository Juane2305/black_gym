import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

export const HeroParallax = () => {
  return (
    <Parallax
      bgImage="https://res.cloudinary.com/dfschbyq2/image/upload/v1738019955/ceb61aaf-8610-4d23-8492-249da80dd730_tin73s.jpg"
      bgImageAlt="Gimnasio Black"
      strength={200}
    >
      {/* Contenedor de contenido con altura viewport */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Overlay oscuro para destacar el texto */}
        <div className="absolute inset-0 bg-opacity-60"></div>

        {/* Contenido del Hero */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Descubre tu fuerza interior en 
            <span className=""> BLACK GYM</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ¡Eleva tu entrenamiento y empuja tus límites con nuestra 
            comunidad de atletas!
          </motion.p>

          <motion.a
            href="#planes"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comienza Hoy
          </motion.a>
        </motion.div>
      </section>
    </Parallax>
  );
};
