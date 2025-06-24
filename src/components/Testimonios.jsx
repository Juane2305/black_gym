import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

export const Testimonios = () => {
  // 1. Datos de ejemplo
  const testimoniosData = [
    {
      id: 1,
      nombre: "Juan",
      foto: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735861226/Dise%C3%B1o_sin_t%C3%ADtulo_8_y8tpzg.jpg", // Reemplazá con una foto real
      comentario: `La verdad que es un golazo entrenar acá. 
      Las máquinas son nuevas y de primer nivel y la gente que trabaja es muy predispuesta.`,
      calificacion: 5,
    },
    {
      id: 2,
      nombre: "Mariana",
      foto: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738019296/a49d9907-8ce2-449b-a3ee-054e2e9da814_w5i1dn.jpg",
      comentario: `El ambiente es súper copado y los profes te dan una mano en todo. 
      ¡Recomiendo al 100%!`,
      calificacion: 5,
    },
    {
      id: 3,
      nombre: "Lucas",
      foto: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735517083/f8ef60b3-e9dd-4dce-bc3c-6ba4a6adc9da.png",
      comentario: `Está bárbaro el gimnasio. 
      Antes iba a otro pero no tenía tantas opciones. 
      Acá puedo entrenar tranquilo y sin esperar turno.`,
      calificacion: 4,
    },
  ];

  // 2. State para llevar el testimonio actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para moverse entre testimonios
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimoniosData.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimoniosData.length - 1 ? 0 : prev + 1));
  };

  // Testimonio actual
  const { nombre, foto, comentario, calificacion } = testimoniosData[currentIndex];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonios</h2>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} 
              className="flex flex-col items-center h-[13rem] md:h-[10rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl  mb-2 text-gray-600">{nombre}</h3>

              <div className="flex justify-center mb-4">
                {[...Array(calificacion)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-1" />
                ))}
              </div>

              <p className="text-gray-600 mb-4 px-4 italic whitespace-pre-line">
                {comentario}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="border-2 border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="border-2 border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
