import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUserTie } from "react-icons/fa";

export const FeaturedServices = () => {
  // Ajusta los servicios según tu oferta
  const services = [
    {
      id: 1,
      title: "Área de Pesas y Máquinas",
      icon: <FaDumbbell className="text-red-500 text-4xl mb-2" />,
      description:
        "Encuentra variedad de máquinas de musculación para trabajar cada grupo muscular.",
    },
    {
      id: 2,
      title: "Zona de Cardio",
      icon: <FaHeartbeat className="text-red-500 text-4xl mb-2" />,
      description:
        "Cintas de correr y bicicletas en un espacio amplio y ventilado para mejorar tu resistencia.",
    },
    {
      id: 3,
      title: "Apoyo Constante",
      icon: <FaUserTie className="text-red-500 text-4xl mb-2" />,
      description:
        "Recibe asesoría y planes de entrenamiento adaptados a tus objetivos, con la guía de nuestros instructores.",
    },
  ];

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
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
