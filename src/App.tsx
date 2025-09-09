// React se importa automáticamente en React 18+
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<HomePage />} />
      <Route path="/proyectos" element={<HomePage />} />
      <Route path="/contacto" element={<HomePage />} />
    </Routes>
  );
}

export default App;
