// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EjerciciosPorGrupo } from "./components/EjerciciosPorGrupo";
import { DetalleEjercicio } from "./components/DetalleEjercicio";
import { Footer } from "./components/Footer";
import { Main } from "./views/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        {/* Ejercicios por grupo: /ejercicios/pectoral, /ejercicios/espalda, etc. */}
        <Route path="/ejercicios/:grupo" element={<EjerciciosPorGrupo />} />

        {/* Detalle de ejercicio: /ejercicios/espalda/5 por ejemplo */}
        <Route path="/ejercicios/:grupo/:id" element={<DetalleEjercicio />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
