import { Maquinas } from "../components/GruposMusculares";
import { Header } from "../components/Header";
import { HeroParallax } from "../components/HeroParallax";
import { FeaturedServices } from "../components/FeaturedServices";
import { Testimonios } from "../components/Testimonios";
import { Galeria } from "../components/Galeria";
import { UbicacionHorarios } from "../components/UbicacionHorarios";
import { Entrenador } from "../components/Entrenador";
import { FAQ } from "../components/FAQ";
import { useEffect, useRef } from "react";

export const Main = () => {


const maquinasRef = useRef(null);

useEffect(() => {
  if (sessionStorage.getItem("scrollToMaquinas") === "true") {
    sessionStorage.removeItem("scrollToMaquinas");
    setTimeout(() => {
      maquinasRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <HeroParallax/>
      <FeaturedServices/>
      <Galeria/>
      <Entrenador/>
      <section ref={maquinasRef} className="maquinas-section">
        <Maquinas />
      </section>
      <Testimonios/>
      <UbicacionHorarios/>
      <FAQ/>
    </div>
  )
}
