import { ThemeProvider } from "context/Theme";
import ScrollToTop from "components/ScrollToTop";
import ComprarIngresso from "pages/ComprarIngresso";
import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import Info from "pages/Info";
import Mapa from "pages/Mapa";
import NotFound from "pages/NotFound";
import PageTemplate from "pages/PageTemplate";
import VerIngresso from 'pages/VerIngresso';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<Home />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="info" element={<Info />} />
            <Route path="ingresso/comprar" element={<ComprarIngresso />} />
            <Route path="ingresso/ver" element={<VerIngresso />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
