// filepath: src/pages/FrontendPortfolio.tsx
import { getFrontendProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Monitor, Gamepad2, Sparkles } from "lucide-react";

export default function FrontendPortfolio() {
  const projects = getFrontendProjects();

  return (
    <div className="flex flex-col gap-10 py-6 md:py-10">
      {/* Page Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12 border border-indigo-500/10 dark:border-indigo-400/5">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span>Interfaces & Game Dev</span>
          </span>
          
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Portfolio Frontend & Games
          </h1>
          
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-650 dark:text-gray-300">
            Exploração prática de interfaces ricas, reatividade e interações visuais. Aqui você encontra desde aplicações web modernas com React e Tailwind CSS até jogos independentes 3D e 2D imersivos desenvolvidos com C# na Unity e C++ / Blueprints na Unreal Engine 5.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Monitor className="h-5 w-5 text-indigo-650 dark:text-indigo-400" />
            <span>Todos os Projetos ({projects.length})</span>
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-12 text-center dark:border-gray-800">
            <Gamepad2 className="h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Nenhum projeto encontrado</h3>
            <p className="mt-2 text-sm text-gray-500">Projetos frontend serão adicionados em breve.</p>
          </div>
        )}
      </div>
    </div>
  );
}
