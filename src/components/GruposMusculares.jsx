// src/pages/GruposMusculares.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ejerciciosData } from "../data/ejerciciosData";

// Diccionario de imágenes por grupo
const imagenesPorGrupo = {
  Pectorales:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1738027904/Dise%C3%B1o_sin_t%C3%ADtulo_17_vadmz2.jpg",
  Espalda:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1738027731/Dise%C3%B1o_sin_t%C3%ADtulo_15_dfys6g.jpg",
  Piernas:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028023/Dise%C3%B1o_sin_t%C3%ADtulo_18_zsbgea.jpg",
  Hombros:
    "https://images.unsplash.com/photo-1588702547923-6f67853662c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  Bíceps:
    "https://images.unsplash.com/photo-1540496867233-4ce973af48fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  Tríceps:
    "https://images.unsplash.com/photo-1579758629648-b5f1f2a6f7d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  Abdominales:
    "https://images.unsplash.com/photo-1632761382559-74809d8bb620?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
};

export const GruposMusculares = () => {
  // Extraer los distintos grupos musculares (sin repetir)
  const gruposUnicos = [
    ...new Set(ejerciciosData.map((ejercicio) => ejercicio.grupo)),
  ];

  return (
    <motion.div
      className="px-4 py-8 bg-black min-h-screen text-white"
      // Animación de aparición
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Ejercicios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gruposUnicos.map((grupo) => (
          <motion.div
            key={grupo}
            className="bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/ejercicios/${grupo.toLowerCase()}`}>
              {/* Imagen del grupo muscular */}
              <img
                src={imagenesPorGrupo[grupo] || "https://via.placeholder.com/400x300?text=Sin+Imagen"}
                alt={grupo}
                className="w-full h-48 object-cover"
              />

              {/* Texto del grupo */}
              <div className="p-4 text-center">
                <span className="text-xl font-semibold block">{grupo}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
