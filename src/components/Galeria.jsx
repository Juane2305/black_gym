import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fotos de ejemplo (sacadas de Unsplash, enfocadas en gimnasio/fitness)
const IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028160/matthew-sichkaruk-3qZt1MwF4Zo-unsplash_xfqpve_1_ckymtn.jpg",
    alt: "Zona de peso libre",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028218/sushil-ghimire-DC5akQJyH4I-unsplash_1_rivvqt.jpg",
    alt: "Bicicletas y cintas de correr",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028256/eduardo-cano-photo-co-AzX5iNFYBMY-unsplash_jzkfjf_1_tszove.jpg",
    alt: "Atleta entrenando hombros",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028299/mohamed-fareed-rbSNsoXk-3A-unsplash_ubxpfd_1_eewpjr.jpg",
    alt: "Máquinas de musculación",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028339/samuel-girven-2e4lbLTqPIo-unsplash_ufdaa2_1_ubwncg.jpg",
    alt: "Vista general del gimnasio",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1738028385/danielle-cerullo-CQfNt66ttZM-unsplash_wtcgwx_1_nap0co.jpg",
    alt: "Pesas y barras en rack",
  },
];

export const Galeria = () => {
  // State para controlar la foto seleccionada en el modal
  const [selectedImg, setSelectedImg] = useState(null);

  // Manejo de selección/deselección de imagen
  const handleOpen = (image) => {
    setSelectedImg(image);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

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
          Galería de Fotos
        </motion.h2>

        {/* Grilla de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              className="relative overflow-hidden rounded shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleOpen(img)}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                // Efecto de zoom al hover
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleClose}
            >
              {/* Imagen central */}
              <motion.img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-full object-contain p-4"
                initial={{ scale: 0.5, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                // Cierro el modal al hacer click en el fondo
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
