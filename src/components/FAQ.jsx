// src/components/FAQ.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const preguntasRespuestas = [
  {
    id: 1,
    pregunta: "¿Necesito experiencia previa para entrenar?",
    respuesta:
      "Para nada. Te acompañamos desde cero con rutinas adaptadas. No te hagas drama, todos empezamos alguna vez.",
  },
  {
    id: 2,
    pregunta: "¿Se paga matrícula o inscripción?",
    respuesta:
      "No cobramos matrícula, solo el abono mensual. Te damos la flexibilidad de arrancar cuando quieras.",
  },
  {
    id: 3,
    pregunta: "¿Hay entrenamientos personalizados?",
    respuesta:
      "¡Obvio! Podés coordinar con nuestro entrenador para armar un plan a tu medida o incluso clases one-to-one.",
  },
  {
    id: 4,
    pregunta: "¿Qué pasa si no puedo ir todos los días?",
    respuesta:
      "No pasa nada, podés venir los días que quieras. Eso sí, para progresar, lo ideal es mantener cierta constancia.",
  },
];

export const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {preguntasRespuestas.map(({ id, pregunta, respuesta }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className="bg-gray-800 rounded-md overflow-hidden"
              >
                {/* Botón de pregunta */}
                <button
                  onClick={() => toggleFAQ(id)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-700 focus:outline-none"
                >
                  <span className="font-semibold">{pregunta}</span>
                  {isOpen ? (
                    <FaChevronUp className="text-red-500" />
                  ) : (
                    <FaChevronDown className="text-red-500" />
                  )}
                </button>

                {/* Contenido con Fade + Slide */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      className="px-4 pb-4 text-gray-300"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {respuesta}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
