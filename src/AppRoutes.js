import { ThemeProvider } from "context/Theme";
import ScrollToTop from "components/ScrollToTop";
import { ComprarIngresso, Experiencia, Home, Info, Mapa, NotFound, PageTemplate, VerIngresso } from "pages";
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
