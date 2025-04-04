import React from "react";
import { motion } from "framer-motion";

export const HeroParallax = () => {
  return (
    <section
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1738019955/ceb61aaf-8610-4d23-8492-249da80dd730_tin73s.jpg')"
  }}
  className="
    relative 
    h-screen 
    w-full 
    flex 
    items-center 
    justify-center 
    bg-cover 
    bg-center
    z-40
  "
>
      {/* Oscurecemos un poco la imagen si lo deseas */}
      <div className="absolute inset-0 opacity-60 bg-black"></div>

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
          Descubrí <span className="">BLACK GYM</span>
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
          className="
            inline-block 
            bg-gray-600 
            hover:bg-gray-700 
            text-white 
            font-semibold 
            py-3 
            px-8 
            rounded 
            shadow-lg 
            transition-colors 
            duration-300
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Comienza Hoy
        </motion.a>
      </motion.div>
    </section>
  );
};