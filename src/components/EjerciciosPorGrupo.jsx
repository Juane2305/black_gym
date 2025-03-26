import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ejerciciosData } from "../data/ejerciciosData";

export const EjerciciosPorGrupo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { grupo } = useParams();
  // Filtramos ejercicios para este grupo
  const ejerciciosFiltrados = ejerciciosData.filter(
    (ej) => ej.grupo.toLowerCase() === grupo
  );

  // Si no hay ejercicios en ese grupo, mostrar mensaje
  if (ejerciciosFiltrados.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">No hay ejercicios para este grupo muscular.</h2>
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
      <Link
        to={`/`}
        className="inline-block mb-6 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded"
      >
        &larr; Volver
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ejercicios de {ejerciciosFiltrados[0].grupo}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {ejerciciosFiltrados.map((ej) => (
            <motion.div
              key={ej.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              // Animaciones al montar y desmontar
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/ejercicios/${grupo}/${ej.id}`}>
                <img
                  src={ej.imagen}
                  alt={ej.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{ej.nombre}</h2>
                  <p className="text-gray-300 line-clamp-2">
                    {ej.descripcion}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
