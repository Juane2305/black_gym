// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EjerciciosPorGrupo } from "./components/EjerciciosPorGrupo";
import { DetalleEjercicio } from "./components/DetalleEjercicio";
import { Footer } from "./components/Footer";
import { Main } from "./views/Main";
import WhatsAppFloatingButton from "./components/WhatsappFloatingButton";

function App() {
  return (
    <Router>
      <WhatsAppFloatingButton/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ejercicios/:grupo" element={<EjerciciosPorGrupo />} />
        <Route path="/ejercicios/:grupo/:id" element={<DetalleEjercicio />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
