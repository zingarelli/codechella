import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import Mapa from "pages/Mapa";
import PageTemplate from "pages/PageTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="mapa" element={<Mapa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
