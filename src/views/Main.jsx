import { GruposMusculares } from "../components/GruposMusculares";
import { Header } from "../components/Header";
import { HeroParallax } from "../components/HeroParallax";
import { FeaturedServices } from "../components/FeaturedServices";
import { Testimonios } from "../components/Testimonios";
import { Galeria } from "../components/Galeria";
import { UbicacionHorarios } from "../components/UbicacionHorarios";
import { Entrenador } from "../components/Entrenador";
import { FAQ } from "../components/FAQ";

export const Main = () => {
  return (
    <div className="overflow-hidden">
        <Header />
      <HeroParallax/>
      <FeaturedServices/>
      <Galeria/>
      <Entrenador/>
      <GruposMusculares />
      <Testimonios/>
      <UbicacionHorarios/>
      <FAQ/>
    </div>
  )
}
