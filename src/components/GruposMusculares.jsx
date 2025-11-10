import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { maquinas } from "../data/ejerciciosData";

const imagenesPorMaquina = {
  default: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1762807722/Disen%CC%83o_sin_ti%CC%81tulo_94_nrjdr5.png',
};

export const Maquinas = () => {
  return (
    <motion.div
      className="px-4 py-20 bg-black min-h-screen text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 id="ejercicios" className="text-4xl font-bold mb-20 text-center">Máquinas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {maquinas.map((m) => (
          <motion.div
            key={m.id}
            className="bg-white rounded-xl transition-colors overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/maquinas/${m.id}`} state={{ scrollY: window.scrollY }}>
              <img
                src={m.img || imagenesPorMaquina.default}
                alt={m.nombre}
                className="w-full h-96 object-cover"
              />
              <div className="p-4 text-center">
                <span className="text-xl text-gray-800 font-semibold block">{m.nombre}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};