import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "Pages/Inicio";
import SobreMim from "Pages/SobreMim";
import Menu from "Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div> Página Não Encontrada !</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
