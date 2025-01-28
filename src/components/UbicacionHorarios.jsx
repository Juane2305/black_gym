import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

export const UbicacionHorarios = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ubicación y Horarios
        </motion.h2>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mapa */}
          <motion.div
            className="w-full h-64 md:h-auto overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3346.9154356527747!2d-68.7887304!3d-32.9796328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0d9a0e67f139%3A0xccbbca8cf0d23a89!2sBlack%20Gym!5e0!3m2!1sen!2sar!4v1738022066970!5m2!1sen!2sar" 
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
          </motion.div>

          {/* Horarios */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Horarios
            </h3>

            {/* Tarjetas de horarios */}
            <div className="flex flex-col gap-4">
              {/* Lunes a Viernes */}
              <div className="bg-gray-800 p-4 rounded-md shadow-md flex items-center justify-between hover:bg-gray-700 transition-colors">
                <div>
                  <h4 className="text-lg font-bold mb-1">Lunes a Viernes</h4>
                  <p className="text-gray-300">07:00 - 22:30</p>
                </div>
                <FaClock className="text-red-500 text-2xl" />
              </div>
              {/* Sábado */}
              <div className="bg-gray-800 p-4 rounded-md shadow-md flex items-center justify-between hover:bg-gray-700 transition-colors">
                <div>
                  <h4 className="text-lg font-bold mb-1">Sábado</h4>
                  <p className="text-gray-300">09:00 - 14:00</p>
                </div>
                <FaClock className="text-red-500 text-2xl" />
              </div>
              {/* Domingo */}
              <div className="bg-gray-800 p-4 rounded-md shadow-md flex items-center justify-between hover:bg-gray-700 transition-colors">
                <div>
                  <h4 className="text-lg font-bold mb-1">Domingo</h4>
                  <p className="text-gray-300">Cerrado</p>
                </div>
                <FaClock className="text-red-500 text-2xl" />
              </div>
            </div>

            <p className="text-gray-300 mt-4 text-center md:text-left">
              ¡Te esperamos para entrenar!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
