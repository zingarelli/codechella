import { ThemeProvider } from "context/Theme";
import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import Mapa from "pages/Mapa";
import NotFound from "pages/NotFound";
import PageTemplate from "pages/PageTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<Home />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
