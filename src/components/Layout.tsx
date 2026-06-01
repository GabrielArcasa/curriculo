// filepath: src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal que cresce para preencher a tela, mantendo o Footer no rodapé (sticky footer) */}
      <main className="app-main">
        <Outlet />
      </main>

      {/* Rodapé no final */}
      <Footer />
    </div>
  );
}
