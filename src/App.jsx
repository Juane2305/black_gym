// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EjerciciosPorGrupo } from "./components/EjerciciosPorGrupo";
import { DetalleEjercicio } from "./components/DetalleEjercicio";
import { Footer } from "./components/Footer";
import { Main } from "./views/Main";
import WhatsAppFloatingButton from "./components/WhatsappFloatingButton";
import PlanesBlackGym from "./components/Planes";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <WhatsAppFloatingButton/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ejercicios/:grupo" element={<EjerciciosPorGrupo />} />
        <Route path="/ejercicios/:grupo/:id" element={<DetalleEjercicio />} />
        <Route path="/precios" element={<PlanesBlackGym/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
