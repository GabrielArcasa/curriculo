// filepath: src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal que cresce para preencher a tela, mantendo o Footer no rodapé (sticky footer) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Rodapé no final */}
      <Footer />
    </div>
  );
}
