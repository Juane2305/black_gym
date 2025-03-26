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
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1743021591/image_3_bz9fzn.jpg",
  Bíceps:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1743021675/image_4_hsrtyy.jpg",
  Tríceps:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1743021716/image_5_roxqck.jpg",
  Abdominales:
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1743021756/image_6_qigesj.jpg",
};

export const GruposMusculares = () => {
  // Extraer los distintos grupos musculares (sin repetir)
  const gruposUnicos = [
    ...new Set(ejerciciosData.map((ejercicio) => ejercicio.grupo)),
  ];

  return (
    <motion.div
      className="px-4 py-20 bg-black min-h-screen text-white"
      // Animación de aparición
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Ejercicios</h1>

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
