import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ejerciciosData } from "../data/ejerciciosData";
import { maquinas } from "../data/ejerciciosData";


export const EjerciciosPorGrupo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { maquina } = useParams();
  const ejerciciosFiltrados = ejerciciosData[maquina] || [];

  if (ejerciciosFiltrados.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">No hay ejercicios para esta maquina.</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="px-4 py-20 bg-black min-h-screen text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
<button
  onClick={() => {
    sessionStorage.setItem("scrollToMaquinas", "true");
    navigate("/");
  }}
  className="inline-block mb-6 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded mt-20"
>
  &larr; Volver
</button>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ejercicios de {maquinas.find(m => m.id === maquina)?.nombre}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {ejerciciosFiltrados.map((ej) => (
            <motion.div
            key={ej.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/maquinas/${maquina}/${ej.id}`}>
              <img
                src={ej.imagen || 'https://res.cloudinary.com/dfschbyq2/image/upload/v1762807722/Disen%CC%83o_sin_ti%CC%81tulo_94_nrjdr5.png'}
                alt={ej.nombre}
                className="w-full h-96 object-cover"
              />
          
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 italic">{ej.nombre}</h2>
              </div>
            </Link>
          </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
