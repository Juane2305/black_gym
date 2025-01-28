// src/pages/DetalleEjercicio.jsx
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ejerciciosData } from "../data/ejerciciosData";

export const DetalleEjercicio = () => {
  const { grupo, id } = useParams();
  const ejercicio = ejerciciosData.find((ej) => ej.id === parseInt(id));

  if (!ejercicio) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Este ejercicio no existe.</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-black text-white min-h-screen px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Botón Volver */}
      <Link
        to={`/ejercicios/${grupo}`}
        className="inline-block mb-6 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded"
      >
        &larr; Volver
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{ejercicio.nombre}</h1>
        <img
          src={ejercicio.imagen}
          alt={ejercicio.nombre}
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-gray-300 mb-4">{ejercicio.descripcion}</p>

        <h2 className="text-2xl font-semibold mb-2">Pasos:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          {ejercicio.pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
