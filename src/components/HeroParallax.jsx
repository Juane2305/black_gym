import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroParallax = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBg = () => {
      const isDesktop = window.innerWidth >= 768;
      setBgImage(
        isDesktop
          ? "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1750781583/IMG_5878_zd4vha.webp')"
          : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1750782182/IMG_5883_l0nhlm.webp')"
      );
    };

    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <section
      style={{ backgroundImage: bgImage }}
      className="
        relative 
        h-screen 
        w-full 
        flex 
        items-end 
        justify-center 
        bg-cover 
        bg-center
        z-40
      "
    >
      <div className="absolute inset-0 opacity-0 bg-black" />
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.a
          href="/precios"
          className="
            inline-block 
            border
            border-white
            hover:bg-white
            hover:text-gray-800
            text-white
            text-lg
            font-semibold 
            py-5 
            px-10 
            rounded 
            shadow-lg 
            transition-colors 
            duration-300
            mb-20
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver planes
        </motion.a>
      </motion.div>
    </section>
  );
};
