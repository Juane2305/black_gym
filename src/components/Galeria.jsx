import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778328/IMG_6623_1_amtxem.jpg",
    alt: "Zona de peso libre",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778239/IMG_6609_jvxc3f.jpg",
    alt: "Bicicletas y cintas de correr",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778279/IMG_6610_1_ejce1v.jpg",
    alt: "Cintas de correr",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778301/IMG_6615_phatef.jpg",
    alt: "Máquinas de musculación",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778368/IMG_6636_gx3sgw.jpg",
    alt: "Pesas y barras en rack",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1747778348/IMG_6633_yslfyh.jpg",
    alt: "Prensa de piernas",
  },
];

export const Galeria = () => {
  const [selectedImg, setSelectedImg] = useState(null);

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
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleClose}
            >
              <motion.img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-full object-contain p-4"
                initial={{ scale: 0.5, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
