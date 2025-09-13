// React se importa automáticamente en React 18+
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
      <Route path="/contacto" element={<HomePage />} />
    </Routes>
  );
}

export default App;
