// filepath: src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FrontendPortfolio from "./pages/FrontendPortfolio";
import BackendPortfolio from "./pages/BackendPortfolio";
import { LanguageProvider } from "./contexts/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="frontend" element={<FrontendPortfolio />} />
            <Route path="backend" element={<BackendPortfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
